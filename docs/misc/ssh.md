
# Connecting to a Linux server with ssh


!!! warning

    Due to security reasons, many Linux servers at TUDelft cannot be accessed directly, they are behind the TUDelft firewall. 

=== ":simple-apple: :simple-linux: Unix (macOS & Linux)"

    ## Connection is a 2-step process for TUDelft servers

    ### 1. ssh to the TUDelft server 

      - for MSc students: student-linux.tudelft.nl
      - for TUDelft staff: linux-bastion-ex.tudelft.nl

    `ssh mynetid@student-linux.tudelft.nl` and password is netid password

    ### 2. ssh from there to the server

    `ssh myusername@abcd.tudelft.nl` but watch out the password is the one you were given by the admin, it is *not* your netid

    ## Avoid the 2-step process (and passwords)

    ### Configuration

    1. In your local computer, type `ssh-keygen -t ed25519` and follow the instructions. It is recommended to use a password to protect your keys. You'll have to use this password everytime you login after you are done, or you can use `ssh-add` to store it (once after you restart your computer).

    2. Create a file named `config` in your `~/.ssh` folder (or, just `vim ~/.ssh/config`) and put the following content:

    ```
    Host bastion
      Hostname student-linux.tudelft.nl
      User netid

    Host abcd
      Hostname abcd.bk.tudelft.nl
      ProxyCommand ssh -W %h:%p bastion
      User gUsername

    Host xyz
      Hostname xyz.tudelft.nl
      ProxyCommand ssh -W %h:%p bastion
      User wUsername
    ```

    Replace `netid` with your netid, `username` with your usernames for the 2 fake servers we list here.

    3. Copy your public key (as created in step 1) to all three servers respectively. So:
      - `ssh-copy-id bastion` and give your TU Delft password when prompted.
      - `ssh-copy-id abcd` and give your keys password (set in step 1) and then your server abcd password.
      - `ssh-copy-id xyz` and your keys password (set in step 1) and then your server xyz password.

    Beware you might be prompted for the password of your ssh keys multiple times before you are asked for the actual password of the respective user in each server.


    ## Usage

    As soon as your `~/.ssh/config` is defined and your public key is copied correctly, you should be able to login to godzilla or the website with the respective commands:
      - `ssh abcd`
      - `ssh xyz`

=== ":material-microsoft-windows: Windows"

    Under Windows it should be possible to do the same as macOS/Linux with [puttyssh](https://putty.org/). 

    The best alternative is to use [WSL](../computer/wsl.md) and follow the same instructions as those for macOS/Linux.
    
    To copy files using a graphic interface use WinSCP, and configure a session following the figures here: 
    ![WinSCP0](./img/WinSCP0.jpeg)
    ![WinSCP1](./img/WinSCP1.jpeg)


