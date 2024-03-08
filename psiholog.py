import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score, RepeatedStratifiedKFold
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import make_pipeline

# Încărcăm setul de date
file_path = 'Antrenare_Psihologi.csv'
data = pd.read_csv(file_path, delimiter=';')

# Codificarea variabilelor categorice
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

# Separarea setului de date într-un set de caracteristici (X) și o etichetă (y)
X = data.drop('Terapeut', axis=1)
y = data['Terapeut']

# Creăm un pipeline care standardizează datele și apoi aplică modelul
pipeline = make_pipeline(StandardScaler(), RandomForestClassifier(n_estimators=100, random_state=42))

# Configurăm metoda de validare încrucișată
cv = RepeatedStratifiedKFold(n_splits=7, n_repeats=3, random_state=42)

# Evaluăm modelul folosind validarea încrucișată
scores = cross_val_score(pipeline, X, y, scoring='accuracy', cv=cv, n_jobs=-1)

# Calculăm acuratețea medie și deviația standard
accuracy_mean = scores.mean()
accuracy_std = scores.std()

print(f"Acuratețea medie: {accuracy_mean:.2%}, Deviația standard: {accuracy_std:.2%}")


tulburare_noua = "Tulburarea bipolara"
terapie_noua = "Terapia prin acceptare și angajament (ACT)"
gender_nou = "F"
sedinta_noua = "online"
tarif_nou = 150
# Codificare pentru datele noi
tulburare_codificata = le_tulburare.transform([tulburare_noua])[0]
terapie_codificata = le_terapie.transform([terapie_noua])[0]
gender_codificat = le_gender.transform([gender_nou])[0]
sedinta_codificata = le_sedinta.transform([sedinta_noua])[0]
# Creare un nou set de date
date_noi = pd.DataFrame({
    'Tulburare': [tulburare_codificata],
    'Terapie': [terapie_codificata],
    'Gender': [gender_codificat],
    'Sedinta': [sedinta_codificata],
    'Tarif': [tarif_nou]
})


# Aplicarea metodei 'fit' pentru scalare pe datele de antrenament
pipeline.fit(X, y)

# Aplicarea predicției
predictie = pipeline.predict(date_noi)

# Decodificarea rezultatului
rezultat_final = le_terapeut.inverse_transform(predictie)

print("Terapeutul recomandat este:", rezultat_final[0])

