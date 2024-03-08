import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline, Pipeline
from sklearn.metrics import classification_report
from sklearn.feature_extraction.text import TfidfVectorizer




#Incarcam setul de date

file_path = 'set_antrenare_tulburari.csv'
data = pd.read_csv(file_path, delimiter=';')

#Prelucram textul si etichetele

X = data['descriere'] #caracterisitici
y = data['tulburare'] #etichete

# Impartim in antrenare si test

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



# Creăm un pipeline care folosește TfidfVectorizer și Naive Bayes
model = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', ngram_range=(1, 2))),
    ('clf', MultinomialNB()),
])

#Antrenam modelul cu setul de antrenare

model.fit(X_train,y_train)

# Folosim validarea încrucișată pentru a evalua modelul
scores = cross_val_score(model, X, y, cv=5)

print(f"Scorurile de acuratețe pentru validarea încrucișată: {scores}")
print(f"Media scorurilor de acuratețe: {scores.mean()}")



#Verificam
descriere_noua = "Mi-e foarte frica de spatiile inchise si intru usor in paniuca"
predictie = model.predict([descriere_noua])
print(f"Tulburarea prezisă pentru descrierea introdusă este: {predictie[0]}")