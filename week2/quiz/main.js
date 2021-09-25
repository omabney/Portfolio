const quiz=[
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's realname?","Bruce Wayne"]
];

let score = 0;

for(const[question,answer] of quiz){
    const response = prompt(question);
    if(response == answer){
        alert('Correct!');
        score++;
    } else{
        alert(`wrong! The correct answer was ${answer}`);
    }
}
alert(`Game over, you scored ${score} points`);