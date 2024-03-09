from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import pandas as pd
import numpy as np


def incarca_si_prelucraza_datele():
    predict_info = pd.read_csv("dataset_terapie_durata.csv", sep=";")
    X = predict_info.drop("Durata", axis=1)
    y = predict_info["Durata"]
    return X, y




def creaza_pipeline_preprocesare():
    categorical_features = ["Tulburare", "Terapie"]
    one_hot_encoder = OneHotEncoder()
    preprocessor = ColumnTransformer(
        transformers=[
            ("cat", one_hot_encoder, categorical_features)
        ],
        remainder="passthrough"
    )
    return preprocessor



def creaza_si_antreneaza_model(X_train, y_train, preprocessor):
    model_gbr = Pipeline(steps=[
        ("preprocessor", preprocessor),
        ("regressor", GradientBoostingRegressor(n_estimators=3, random_state=42))
    ])
    model_gbr.fit(X_train, y_train)
    return model_gbr




def evalueaza_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    return mse, r2




def realizeaza_predictie_si_ajustare(model, input_data):
    input_pred = model.predict(input_data)
    valori_posibile = np.array([1, 1.5, 2, 2.5, 3])
    valoare_ajustata = valori_posibile[np.argmin(np.abs(valori_posibile - input_pred))]
    return valoare_ajustata



# Împărțirea setului de date în seturi de antrenament și de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)








