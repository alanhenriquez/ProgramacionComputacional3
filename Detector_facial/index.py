from flask import Flask, render_template

app = Flask(__name__)


enlaces=[{"url":"/", "texto":"Home"},
			{"url":"/contacto", "texto":"Contacto"},
			{"url":"/uso", "texto":"Uso"},
			]

@app.route('/')
def principal():
    return render_template('index.html', enlaces = enlaces)

@app.route('/contacto')
def contacto():
    return render_template('contacto.html', enlaces = enlaces)


@app.route('/uso')
def uso():
    return render_template('uso.html', enlaces = enlaces)


if __name__=='__main__':
    app.run(debug=True, port=5017)