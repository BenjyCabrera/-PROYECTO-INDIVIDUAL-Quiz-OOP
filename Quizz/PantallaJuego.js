const pregunta = {
    "questions": [
        {
            "question": "How do you round the number 7.25, to the nearest integer?",
            "answers": [
                "Math.round(7.25)",
                "round(7.25)",
                "Math.rnd(7.25)",
                "rnd(7.25)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which operator is used to assign a value to a variable?",
            "answers": [
                "x",
                "-",
                "=",
                "*"
            ],
            "correctAnswer": 2
        },
        {
            "question": "How do you write \"Hello World\" in an alert box?",
            "answers": [
                "msgBox(\"Hello World\");",
                "alert(\"Hello World\");",
                "alertBox(\"Hello World\");",
                "msg(\"Hello World\");"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
            "answers": [
                "document.getElement(\"p\").innerHTML = \"Hello World!\";",
                "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
                "#demo.innerHTML = \"Hello World!\";",
                "document.getElementByName(\"p\").innerHTML = \"Hello World!\";"
            ],
            "correctAnswer": 2
        },
        {
            "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            "answers": [
                "<script href=\"xxx.js\">",
                "<script src=\"xxx.js\">",
                "<script name=\"xxx.js\">",
                "<script declare=\"xxx.js\">"
            ],
            "correctAnswer": 2
        }
    ]
}

class Pregunta{
    constructor(pregunta){
        this.pregunta = pregunta
        this.container = document.getElementById("contenedorPreguntas")
    }

    printQuestion() {
        const p = document.createElement('p')
        p.innerText = this.pregunta.question

        this.container.append(p)

        for (let i=0; i< this.pregunta.answers.length; i++){
            this.printAnswer(this.pregunta.answers[i], i)
            
        }

        const btn = document.createElement('button')
        btn.innerText = "Comprobar"

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const selectedRadio = document.querySelector(':checked')

            console.log(selectedRadio.value)
        })

        this.container.append(btn)
        
    }

    printAnswer(answer, key) {
        const label = document.createElement('label')
        label.setAttribute('for', `a-${key}` )
        label.textContent = answer

        const input = document.createElement('input')
        input.setAttribute('type', `radio` )
        input.setAttribute('name', `answer` )
        input.setAttribute('value', key )
        input.setAttribute('id', `a-${key}`)

        this.container.append(label, input)
    }
 }


    const preguntas = pregunta.questions

    const p1  = new Pregunta(preguntas[0])
    const p2  = new Pregunta(preguntas[1])
    const p3  = new Pregunta(preguntas[2])
    const p4  = new Pregunta(preguntas[3])
    const p5  = new Pregunta(preguntas[4])

   



p1.printQuestion()
p2.printQuestion()
p3.printQuestion()
p4.printQuestion()
p5.printQuestion()

