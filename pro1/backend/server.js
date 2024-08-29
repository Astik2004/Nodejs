import express from 'express';
const app=express();
app.use(express.static('dist'));
const port=process.env.PORT || 4000

/* app.get("/",(req,res)=>{
    res.send("Server is ready ");
})*/
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
          id: 1,
          name: "Nature Bugs",
          joke: "Why don't programmers like nature? It has too many bugs."
        },
        {
          id: 2,
          name: "Java Glasses",
          joke: "Why do Java developers wear glasses? Because they don't C#."
        },
        {
          id: 3,
          name: "Light Bulb",
          joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem."
        },
        {
          id: 4,
          name: "Favorite Hangout",
          joke: "What is a programmer's favorite hangout place? Foo Bar."
        },
        {
          id: 5,
          name: "Dark Mode",
          joke: "Why do Python programmers prefer dark mode? Because the light attracts too many bugs."
        },
        {
          id: 6,
          name: "Null Feelings",
          joke: "Why was the JavaScript developer sad? Because they didn't know how to 'null' their feelings."
        },
        {
          id: 7,
          name: "Outdoors",
          joke: "Why do programmers hate the outdoors? There are too many bugs."
        },
        {
          id: 8,
          name: "C Comments",
          joke: "Why do C programmers have to write so many comments? Because code is easier to read when you're drunk."
        }
      ];
    res.json(jokes); 
})

app.listen(port,()=>{
    console.log(`Server at http://localhost:${4000}/`);
})