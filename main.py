# main.py
from flask import Flask, request, jsonify, render_template
import pandas as pd
from tulburare import incarca_prelucrare_date, creaza_antreneaza_model, predictie_model

app = Flask(__name__)

# Încărcăm datele și antrenăm modelul o singură dată când serverul pornește
X_train, X_test, y_train, y_test = incarca_prelucrare_date()
model = creaza_antreneaza_model(X_train, y_train)

@app.route('/tulburare', methods=["POST"])
def predict_tulburare():
    data = request.json
    descriere = data['descriere']
    tulburare_predusa = predictie_model(model, descriere)
    return jsonify({"tulburare_predusa": tulburare_predusa})

@app.route('/predictie', methods=['POST'])
def predictie_route():
    date_noi = request.json
    rezultat = psiholog.predictie_psiholog(model, le_tulburare, le_terapie, le_gender, le_sedinta, le_terapeut, date_noi)
    return jsonify({'Terapeutul_recomandat': rezultat})



if __name__ == '__main__':
    app.run(debug=True)
