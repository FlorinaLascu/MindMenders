# tulburare.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer

# Încărcăm și prelucrăm setul de date
def incarca_prelucrare_date():
    file_path = 'set_antrenare_tulburari.csv'
    data = pd.read_csv(file_path, delimiter=';')
    X = data['descriere']
    y = data['tulburare']
    return train_test_split(X, y, test_size=0.2, random_state=42)

# Creăm și antrenăm modelul
def creaza_antreneaza_model(X_train, y_train):
    model = Pipeline([
        ('tfidf', TfidfVectorizer(stop_words='english', ngram_range=(1, 2))),
        ('clf', MultinomialNB()),
    ])
    model.fit(X_train, y_train)
    return model

# Facem predicția
def predictie_model(model, descriere_noua):
    return model.predict([descriere_noua])[0]
