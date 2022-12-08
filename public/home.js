function Home(){
  return (
    <Card
      txtcolor="white"
      bgcolor="info"
      header="BadBank"
      title="Welcome to the bank!"
      text="Hello there. Today is the best day to open an account on our bank. It is a pleasure making business with you."
      body={(<img src="badbank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
