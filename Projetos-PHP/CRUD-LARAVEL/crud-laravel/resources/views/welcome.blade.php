<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="/newuser" method="POST">
        @csrf

        <label for="name">Name</label>
        <input name="name" type="text">

        <label for="phone">Phone</label>
        <input name="phone" type="text">


        <button>Send request</button>

    </form>

    


    <div>




    </div>



</body>

</html>