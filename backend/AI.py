from keras.models import Sequential
from keras.layers import Conv2D, MaxPool2D, Dense, Flatten
from keras.models import load_model
import numpy as np

def create_model():
    model = Sequential()
    model.add(Conv2D(128, (4, 4), padding="same", activation="relu"))
    model.add(MaxPool2D((2, 2)))
    model.add(Conv2D(64, (4, 4), padding="same", activation="relu"))
    model.add(MaxPool2D((2, 2)))
    model.add(Conv2D(64, (4,4), padding="same", activation="relu"))
    model.add(MaxPool2D((2,2)))

    model.add(Flatten())
    
    model.add(Dense(165, activation="sigmoid"))
    model.add(Dense(82, activation="sigmoid"))
    model.add(Dense(41, activation="sigmoid"))
    model.add(Dense(40, activation="sigmoid"))

    model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["mae", "mse"])

    return model

def process_image(image: np.ndarray):
    model = load_model("models/first_model.h5")

    image =np.resize(image, (430, 932))
    results = model.predict(image)

    return results
