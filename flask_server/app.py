from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import load_img,img_to_array
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
import os
import tensorflow as tf
from PIL import Image
import numpy as np
import cv2
import io
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

UPLOAD_FOLDER = 'uploadImages'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

model = tf.keras.models.load_model('./models/Classification.h5')

# Obj_model = tf.keras.models.load_model('./models/best.pt')

# Define labels for classification model
class_names  = ['Burger', 'Crispy Chicken', 'Donut', 'Hot Dog', 'Pizza', 'Taco']
class_indices = {'Burger':0, 'Pizza':1, 'Donut':2, 'Crispy Chicken':3, 'Hot Dog':4, 'Taco':5}

# Define labels for object detection model
labels_object  = ['burger bun', 'lettuce', 'tomato', 'onion', 'pickle', 'meat', 'cheese slice']


#prediction method
@app.route('/recipe', methods=['POST'])
def predicte():
    print("Received request. URL:", request.url, "Method:", request.method, "filename: ", request.files)

    file = request.files['file']
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    

    img = load_img(file_path, target_size = (224,224,3))
    img = img_to_array(img)
    img = img/255
    img = np.expand_dims(img,[0])
    answer = model.predict(img)
    y_class = answer.argmax(axis=-1)
    y = " ".join(str(x) for x in y_class)
    y = int(y)
    result = class_names[y]
    return jsonify(result)
    

    

if __name__ == '__main__':
    app.run(debug=True)
