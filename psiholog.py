import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score, RepeatedStratifiedKFold
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import make_pipeline


def incarca_prelucrare_date_psiholog():
    file_path = 'Antrenare_Psihologi.csv'
    data = pd.read_csv(file_path, delimiter=';')

    le_tulburare = LabelEncoder()
    data['Tulburare'] = le_tulburare.fit_transform(data['Tulburare'])

    le_terapie = LabelEncoder()
    data['Terapie'] = le_terapie.fit_transform(data['Terapie'])

    le_gender = LabelEncoder()
    data['Gender'] = le_gender.fit_transform(data['Gender'])

    le_sedinta = LabelEncoder()
    data['Sedinta'] = le_sedinta.fit_transform(data['Sedinta'])

    le_terapeut = LabelEncoder()
    data['Terapeut'] = le_terapeut.fit_transform(data['Terapeut'])

    X = data.drop('Terapeut', axis=1)  # Presupunem că 'Terapeut' este variabila țintă
    y = data['Terapeut']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    return X_train, X_test, y_train, y_test, le_tulburare, le_terapie, le_gender, le_sedinta, le_terapeut


def creaza_antreneaza_model_psiholog(X_train, y_train):
    pipeline = make_pipeline(StandardScaler(), RandomForestClassifier(n_estimators=100, random_state=42))
    model = pipeline.fit(X_train, y_train)
    return model


def predictie_psiholog(model, le_tulburare, le_terapie, le_gender, le_sedinta, le_terapeut, date_noi):
    date_noi_transformate = pd.DataFrame({
        'Tulburare': le_tulburare.transform([date_noi['Tulburare']])[0],
        'Terapie': le_terapie.transform([date_noi['Terapie']])[0],
        'Gender': le_gender.transform([date_noi['Gender']])[0],
        'Sedinta': le_sedinta.transform([date_noi['Sedinta']])[0],
        'Tarif': [date_noi['Tarif']]
    })

    predictie = model.predict(date_noi_transformate)
    rezultat_final = le_terapeut.inverse_transform(predictie)[0]
    return rezultat_final
