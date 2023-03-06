function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6be7aJ2wWW3":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwB7olrRrZZFGxrxodMA5KcTMJoinEhYmA68C8oNIV3CArL7U8kfIlzCStRseCQz6wWtg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

