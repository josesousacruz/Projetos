<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form action="/updateuser/{{$user->id}}" method="POST">
        @csrf
        @method("PUT")

        <label for="name">Name</label>
        <input name="name" type="text" value="{{ $user->name }}">

        <label for="phone">Phone</label>
        <input name="phone" type="text" value="{{ $user->phone }}">


        <button>Edit User</button>

    </form>
</body>

</html>