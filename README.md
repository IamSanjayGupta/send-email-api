## What is this repo?
    This is simple rest api for sending email from client devices by making post request using gmail service.

## How to use ?

- Send post request to [https://sendemail-999.herokuapp.com](https://sendemail-999.herokuapp.com) with below data object
- Data Object Structure

  ```
  {
      "auth":{
          "user": "abc.xyz@gmail.com",
          "pass" : "abcdefghabcdefgh"
      },
      "message":{
          "from": "XYZ <abc.xyz@gmail.com>",
          "to": "PQR < pqr@gmail.com >",
          "subject": "Congratulations",
          "text": "Hello to myself!",
          "html": "<p>Hello to myself!</p>"
      }
  }
  ```

## Where to get the username(user) and password(pass)

- user - It's your email id;
- pass - This is not your google password, It's 16 digit app password for 3rd party app access. [Refer](https://support.google.com/mail/answer/185833?hl=en) to get it.

## Common fields

- from - The email address of the sender. All email addresses can be plain ‘sender@server.com’ or formatted '“Sender Name” sender@server.com'.
- to - Comma separated list or an array of recipients email addresses that will appear on the To: field
- cc - Comma separated list or an array of recipients email addresses that will appear on the Cc: field
- bcc - Comma separated list or an array of recipients email addresses that will appear on the Bcc: field
- subject - The subject of the email
- text - The plaintext version of the message as an Unicode string,
- html - The HTML version of the message as an Unicode string,
