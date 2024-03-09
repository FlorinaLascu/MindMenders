# main.py
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import pandas as pd
from tulburare import incarca_prelucrare_date, creaza_antreneaza_model, predictie_model,creaza_pipeline_preprocesare
import psiholog
from durata import incarca_si_prelucraza_datele, creaza_si_antreneaza_model
app = Flask(__name__)
CORS(app, origins=["http://localhost:4200"])


# Încărcăm datele și antrenăm modelul o singură dată când serverul pornește
X_train, X_test, y_train, y_test = incarca_prelucrare_date()
model = creaza_antreneaza_model(X_train, y_train)


# Inițializarea modelului și a encoderilor
X_train_psiholog, X_test_psiholog, y_train_psiholog, y_test_psiholog, le_tulburare, le_terapie, le_gender, le_sedinta, le_terapeut = psiholog.incarca_prelucrare_date_psiholog()
model2 = psiholog.creaza_antreneaza_model_psiholog(X_train_psiholog, y_train_psiholog)


X_durata, y_durata = incarca_si_prelucraza_datele()
preprocessor = creaza_pipeline_preprocesare()
X_train_durata, X_test_durata, y_train_durata, y_test_durata = train_test_split(X_durata, y_durata, test_size=0.2, random_state=42)
model = creaza_si_antreneaza_model(X_train_durata, y_train_durata, preprocessor)

@app.route('/tulburare', methods=["POST"])
def predict_tulburare():
    data = request.json
    descriere = data['description']
    tulburare_predusa = predictie_model(model, descriere)
    return jsonify({"tulburare_produsa": tulburare_predusa})


@app.route('/predictie_durata', methods=['POST'])
def predictie_durata_route():
    # Preia datele de intrare de la client
    date_noi = request.get_json(force=True)
    input_df = pd.DataFrame([date_noi])

    # Realizează predicția și ajustează rezultatul
    valoare_ajustata = realizeaza_predictie_si_ajustare(model, input_df)

    # Trimite răspunsul înapoi la client
    return jsonify({'Durata_terapiei_ajustata': valoare_ajustata})


if __name__ == '__main__':
    app.run(debug=True)
