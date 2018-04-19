from flask import Flask
import numpy as np
import json
a=(json.dumps({"Hi":"hai","who are you":"i am fine","good morning":"good night","good night":"bye"}, sort_keys=True))
b=json.loads(a)

app = Flask(__name__)


@app.route('/ans/<query>')

def answer_me(query):
    
    c=b[query]
    return c
    #return 'Hello World!'
if __name__ == '__main__':
    app.run()
