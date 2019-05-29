 var account = prompt("tên đăng nhập");
 if(account == 'Admin')
 {
     var password = prompt("Mật khẩu:");
     if(password == '')
     {
         alert("Canceled");
     }
     else
     {
         if (password == 'TheMaster')
         {
             alert("Welcome");
         }
         else
         {
             alert("Wrong Password");
         }
     }
  }
 else
 {
     alert("I don't know you");
 }