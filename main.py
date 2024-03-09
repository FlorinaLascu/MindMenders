# main.py
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import pandas as pd
from tulburare import incarca_prelucrare_date, creaza_antreneaza_model, predictie_model
import psiholog
app = Flask(__name__)
CORS(app, origins=["http://localhost:4200"])


# Încărcăm datele și antrenăm modelul o singură dată când serverul pornește
X_train, X_test, y_train, y_test = incarca_prelucrare_date()
model = creaza_antreneaza_model(X_train, y_train)


# Inițializarea modelului și a encoderilor
X_train_psiholog, X_test_psiholog, y_train_psiholog, y_test_psiholog, le_tulburare, le_terapie, le_gender, le_sedinta, le_terapeut = psiholog.incarca_prelucrare_date_psiholog()
model2 = psiholog.creaza_antreneaza_model_psiholog(X_train_psiholog, y_train_psiholog)



@app.route('/tulburare', methods=["POST"])
def predict_tulburare():
    data = request.json
    descriere = data['description']
    tulburare_predusa = predictie_model(model, descriere)
    return jsonify({"tulburare_produsa": tulburare_predusa})


@app.route('/predictie', methods=['POST'])
def predictie_route():
    date_noi = request.json
    rezultat = psiholog.predictie_psiholog(model2, le_tulburare, le_terapie, le_gender, le_sedinta, le_terapeut, date_noi)
    return jsonify({'Terapeutul_recomandat': rezultat})
#


if __name__ == '__main__':
    app.run(debug=True)
