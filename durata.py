from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import pandas as pd
import numpy as np

# Read the data
predict_info = pd.read_csv("dataset_terapie_durata.csv", sep=";")

# Split the data into x/y
X = predict_info.drop("Durata", axis=1)
y = predict_info["Durata"]

# Codificarea one-hot pentru variabilele categorice
categorical_features = ["Tulburare", "Terapie"]
one_hot_encoder = OneHotEncoder()

# Crearea unui pipeline pentru preprocesare și model
preprocessor = ColumnTransformer(
    transformers=[
        ("cat", one_hot_encoder, categorical_features)
    ],
    remainder="passthrough"
)

model_gbr = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("regressor", GradientBoostingRegressor(n_estimators=3, random_state=42))
])

# Împărțirea setului de date în seturi de antrenament și de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Antrenarea modelului GradientBoostingRegressor
model_gbr.fit(X_train, y_train)

# Predicțiile pe setul de test utilizând GradientBoostingRegressor
y_pred_gbr = model_gbr.predict(X_test)

# Calcularea metricilor de performanță pentru GradientBoostingRegressor
mse_gbr = mean_squared_error(y_test, y_pred_gbr)
r2_gbr = r2_score(y_test, y_pred_gbr)


input_data = pd.DataFrame({
    "Tulburare": ["Fobia specifică"],
    "Terapie": ["Terapia prin acceptare și angajament (ACT)"]
})

# Utilizarea modelului pentru a face o predicție pe baza inputului
input_pred = model_gbr.predict(input_data)

valori_posibile = np.array([1, 1.5, 2, 2.5, 3])
valoare_ajustata = valori_posibile[np.argmin(np.abs(valori_posibile - input_pred))]

print(f"Predicția ajustată a duratei terapiei pentru inputul dat este: {valoare_ajustata} ani")

#print(f"Predicția duratei terapiei pentru inputul dat este: {input_pred[0]} ani")

