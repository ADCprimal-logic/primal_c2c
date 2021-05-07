<template>
  <div class="app">
    <h1 class="main-heading">C2C Parents Login</h1>
    <p class="intro-text">
      <hr class="divider" />
      <br>Welcome parents!<br/> 
      Returning users login here.<br/>
      <br>
<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>
    <a href="/">Return</a><br />
    <hr class="divider" />
    <a href=/resetpassword>Forgot password?</a><br />
    <a href=/new_register>Don't have an account yet?</a>
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.add-item::placeholder {
  color: hsla(220, 30%, 60%, 0.8);
}
.add-item:focus {
  outline: solid 2px hsl(220, 70%, 60%);
}
.remove-item:focus {
  border-bottom: solid 2px hsl(220, 70%, 60%);
}
.remove-item {
  background: transparent;
  outline: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.app {
  margin: 20px 20px;
  padding: 20px;
  max-width: 600px;
  background: rgb(255, 255, 255);
  border-radius: 18px;
  border: solid 3px hsl(220, 70%, 60%, 0.8);
  color: hsla(220, 84%, 14%, 1);
}

@media (min-width: 550px) {
  .app {
    margin: 10vh 10vw;
    padding: 50px;
  }
}

.main-heading {
  font-weight: 900;
}

.intro-text {
  line-height: 1.5;
  color: hsla(220, 84%, 14%, 0.6);
}

.divider {
  margin-top: 30px;
  margin-left: 0;
  width: 48px;
  height: 4px;
  border-width: 0;
  background-color: hsla(220, 84%, 60%, 1);
}

.form-wrapper {
  max-width: 500;
}

.app-heading {
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 50px;
}

.form-input {
  color: hsla(220, 84%, 14%, 0.6);
  padding: 12px 16px;
  font-size: 1.25em;
  width: 100%;
  border-radius: 6;
  border: 0;
  border: solid 1px hsl(220, 30%, 70%);
  background: hsl(220, 84%, 98%);
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 32px 16px;
  font-size: 1.25em;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid hsla(220, 84%, 60%, 0.32);
}

.delete-icon {
  width: 20px;
  height: 20px;
  fill: hsla(220, 84%, 60%, 1);
}
.vertical-line{
        display: inline-block;
        border-left: 1px solid #ccc;
        margin: 0 10px;
        height: 250px;
}
</style>
