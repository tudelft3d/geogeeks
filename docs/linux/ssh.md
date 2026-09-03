
# How to connect to a TU Delft Linux server with ssh

The connection to a TU Delft Linux server is done with SSH through your terminal (on Unix-based systems) or PowerShell (on Windows). If you are working remotely, it is important that you also have `eduVPN` installed and activated. This is necessary anywhere where `eduroam` is not available.

## **Step 1: Connect to the jump server**

  Direct SSH access to TUD servers is not allowed. Therefore, to connect to your server, you need first to connect to a jump server.

  !!! warning
      For TU Delft employees, the jump server is called `linux-bastion-ex.tudelf.nl`. For students, the jump server is called `student-linux.tudelft.nl`. The following guide uses `student-bastion-ex.tudelf.nl` as an example.

  To connect to the jump server, you can run the following command in your terminal or PowerShell on Windows (make sure you substitute <netid>  with your NetID and that you use the right jump server name).

  ```bash
  ssh <netid>@student-bastion-ex.tudelft.nl
  ```

  When prompted for a password, use your NetID password. If your connection is successful, you will be connected to the jump server.

## **Step 2: Connect from the jump server to the TU Delft server**

  After you have successfully connected to the jump server, you can connect from it directly to the server of your choice with ssh. You can find the correct hostname in the email you received (here we use `gilfoyle.bk.tudelft.nl` as an example).

  Depending on the username you received in the email there are 2 options:

  A) If the username is the same as your NetID:

  From the jump server, simply run:

  ```bash
  ssh gilfoyle.bk.tudelft.nl
  ```

  B) If the username is different from your NetID:

  From the jump server, use the username to connect, running:

  ```bash
  ssh <username>@gilfoyle.bk.tudelft.nl
  ```

  When you are prompted for a password, give the temporary password from the email. Then set up your new password.

  Congrats! You have connected to the server!

## **Step 3: Make the connection easier with SSH keys (optional)**

1. To make connecting to the server faster and without the need for a password, you need to generate an SSH key pair. In your computer's terminal/PowerShell, type:

```bash
ssh-keygen -t rsa
```

and follow the instructions. The flag `–t rsa` is used to set the algorithm to be used for the key generation and can be substituted with `-t ed25519`, if preferred. It is recommended to use a password to protect your keys. You'll have to use this password every time you login, or you can use ssh-add to store it (once after you restart your computer). This command will create an SSH key pair in your ~/.ssh directory. There will be 2 files, `id_rsa` for the private key and `id_rsa.pub` for the public one. If you choose to name your file differently (to avoid overwriting other ssh keys you might have) please make sure to use the correct file name in the following commands. 

1. Create a file named `config` in your `~/.ssh` folder (or, just `vim ~/.ssh/config`) and add the following content:

```
Host bastionex
  Hostname student-bastion-ex.tudelft.nl
  User <netid>

Host <server_name>
  Hostname <server_hostname>
  ProxyJump bastionex
  User <username>

```

Replace `<netid>` with your netid. This will allow you to connect to Bastion. Substitute `<server_name>`, `<server_hostname>` and `<username>` with your credentials for the server. Here is example for gilfoyle:

```
  Host gilfoyle
  Hostname gilfoyle.bk.tudelft.nl
  ProxyJump bastionex
  User <username>

```

For each server that you would like to connect to you can add the same snippet to your config file.

If in the step 2 you changed the name of your ssh key from the default  `id_rsa`, you need to add the following line to each of the hosts:

```
IdentityFile ~/.ssh/<your_filename>

```
     
 1. Copy your public ssh key (as created in step 1) to all servers respectively. So:
- `ssh-copy-id bastionex` and give your TU Delft password when prompted.
- `ssh-copy-id <server>` and give your key's password (set in step 1) and then your server password. Beware you might be prompted for the password of your ssh keys multiple times before you are asked for the actual password of the respective user in each server.
Now you can install your SSH public key on the jump server with the following command and give you NetID password when prompted. (Note: change the server name if needed)

**Usage**

As soon as your `~/.ssh/config` is set and your public key is copied correctly, you should be able to login to the server with:

- `ssh <server>`




