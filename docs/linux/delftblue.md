# Using the DelftBlue supercomputer

!!! note

    This is taken from from [the blog of Nail Ibrahimli](https://3d.bk.tudelft.nl/nail/tudhpc/). This is a great general explanation of everything a geomatics student would need to know to use DelftBlue.

# Introduction

I am not an expert in using SLURM and using HPCs, but I have used it for a while now, and I have found it to be a very useful tool for managing HPC jobs. In this post, I will provide a brief introduction to SLURM, DelftBlue and INSY, and I will provide some basic information on how to use SLURM to manage HPC jobs on DelftBlue and INSY clusters.

I have noticed that some students — particularly those with little to no technical background — are having difficulty using SLURM to manage HPC workloads on the DelftBlue and INSY clusters. This observation was the impetus for this post. I wanted to write a brief tutorial for those students that would cover all the essential information in one location.  This post aims to assist you in getting started with SLURM and HPC tasks on the DelftBlue and INSY clusters. Examples provided here are mainly for GPU-based jobs, but similar principles apply to CPU-based jobs as well.

But I would **strongly suggest** to read the official documentation of DelftBlue and INSY, as it is very well written and has a lot of useful information.

# SLURM

[SLURM](https://slurm.schedmd.com/) (Simple Linux Utility for Resource Management) is a powerful open-source cluster management and job scheduling system that is widely used in High Performance Computing (HPC) environments. It is designed to be highly scalable, fault-tolerant, and easy to use.


To submit a GPU job to the SLURM scheduler, you will need to use the `sbatch` command. The `sbatch` command allows you to submit a batch script to the scheduler, which will then execute the script on the appropriate resources. Here is an example of a simple SLURM batch script that requests one GPU and runs a command:

```bash
#!/bin/bash
#SBATCH --gres=gpu:1
#SBATCH --nodes=1
#SBATCH --time=00:10:00

# Execute the command
./your_command
```

In this example, the `#SBATCH` command requests one GPU, one node and it will run for 10 minutes. You can edit the script and include your commands for the job.

To submit the job, use the `sbatch` command followed by the name of the batch script file:
```
sbatch my_job.sh
```
Once the job is submitted, you can use the `squeue` command to view the status of your job. This command will display information about the job such as the job ID, the user who submitted the job, the status of the job, and more.

```bash
squeue -u <username>
```

To cancel a job, you can use the `scancel` command followed by the job ID.
```bash
scancel <job_id>
```
After your job is completed, you can use the `sacct` command to view accounting information about your job, including the resources it consumed and the exit status of the job.

These are the basic steps for using SLURM to manage GPU-based HPC jobs. Be sure to consult the SLURM documentation for more information on how to use the system, including advanced configuration options and troubleshooting tips.

# DelftBlue

DelftBlue is a high-performance computing cluster that is used for research and education at TU Delft. It is a heterogeneous cluster that consists of a mix of CPU and GPU nodes. The official documentation is maintained in this [link](https://doc.dhpc.tudelft.nl/delftblue/).

If you are supervisor having a student need to use DHPC, or aforementioned student you can request a project for your student. The request form is [here](https://tudelft.topdesk.net/tas/public/ssp/content/detail/service?unid=b7e2b7b46ac94cf688c21761aa324fc1&from=fb47dc4a-d699-45e5-be24-65086929391d) and must be filled by student.

### Connecting to DelftBlue

<sub><sup>I feel lazy to learn to use GUI based softwares, so I  use terminal, and give command examples </sup></sub>

To connect to DelftBlue, you will need to use SSH. The login node is `login.delftblue.tudelft.nl`. You can connect to the login node using the following command:

```bash
ssh <netid>@login.delftblue.tudelft.nl
```

### Data transfer

- SCP (Secure Copy) <sub><sup>*Common choice*</sup></sub> <br>
    Using the `scp` command, you can copy files to and from DelftBlue. Here are some examples of using the scp command:
    ```bash
    scp <source> <target>
    # Copying files from local machine to DelftBlue
    scp <source> <netid>@login.delftblue.tudelft.nl:<target>
    # Copying files from local machine to DelftBlue recursively
    scp -r <source> <netid>@login.delftblue.tudelft.nl:<target>
    # Copying files from DelftBlue to local machine
    scp <netid>@login.delftblue.tudelft.nl:<source> <target>
    # Copying files from DelftBlue to local machine recursively
    scp -r <netid>@login.delftblue.tudelft.nl:<source> <target>
    ```
- SFTP (Secure File Transfer Protocol) <sub><sup>*Personal favourite*</sup></sub> <br>
    Using the `sftp` command, you can transfer files to and from DelftBlue. Here are some examples of using the `sftp` command:
    ```bash
    sftp <netid>@login.delftblue.tudelft.nl
    # Changing directory in DelftBlue
    cd <directory>
    # Creating directory in local machine
    lcd <directory>
    # Listing files in DelftBlue
    ls
    # Listing files in local machine
    lls 

    # Just add an 'l' to the beginning of the command to perform the same operation on the local machine

    # Copying files from local machine to DelftBlue
    put <source> <target>
    # Copying files from local machine to DelftBlue recursively
    put -r <source> <target>
    # Copying files from DelftBlue to local machine
    get <source> <target>
    # Copying files from DelftBlue to local machine recursively
    get -r <source> <target>
    ```
## Loading modules
### What are modules?
Modules are a way to manage software on a cluster. They allow you to *load* and *unload* software packages, and they allow you to manage dependencies between software packages. Modules are loaded using the `module` command. Here are some examples of using the `module` command:
```bash
# Loading a module
module load <module_name>
# Unloading a module
module unload <module_name>
# Listing loaded modules
module list
# Listing available modules
module avail
```

### What modules are available?
The modules available on DelftBlue are listed in the [modules page](https://doc.dhpc.tudelft.nl/delftblue/DHPC-modules/). Use `spider` command to search for modules
```bash
module spider <module_name>
```
### I am fully lost. How do I know which modules I need?

You can use the following command if you are not knowing what you are doing, 
```bash
module load 2022r2     # load the default DelftBlue software stack
module load cuda/11.6  # or cuda you need
module load miniconda3 # loading the conda
```
Checking the cuda version installed
```bash
[<netid>@login04 ~]$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2022 NVIDIA Corporation
Built on Tue_Mar__8_18:18:20_PST_2022
Cuda compilation tools, release 11.6, V11.6.124
Build cuda_11.6.r11.6/compiler.31057947_0
```
## Conda environment
### What is conda?
Conda is an open-source package management system and environment management system that runs on Windows, macOS, and Linux. Conda quickly installs, runs, and updates packages and their dependencies. Conda easily creates, saves, loads, and switches between environments on your local computer. It is mainly used for Python programs.

### How to use conda?
To use conda, you will need to load the conda module. Here are some examples of using the `conda` command:
```bash
# Loading the conda module
module load miniconda3
# Creating a conda environment
conda create -n <environment_name> <package_name>
# Activating a conda environment
conda activate <environment_name>
# Deactivating a conda environment
conda deactivate
# Listing conda environments
conda env list
# Listing packages in a conda environment
conda list
# Installing a package in a conda environment
conda install <package_name> -c <channel_name>
# Removing a package from a conda environment
conda remove <package_name>
# Removing a conda environment
conda env remove -n <environment_name> --all
```
### Should I use conda environment on DelftBlue? Avoiding storage issues
Yes, you should use conda environment on DelftBlue. Is that I all need to do? No, the reason is that conda environments are stored in your home directory, and not in the shared file system. This means that you will not run into storage issues when using conda environments. And it will happen very quickly, believe me.

To avoid storage issues, you should create a *conda environment* on the scratch storage and link to them in your home directory.
```bash
mkdir -p /scratch/${USER}/.conda
ln -s /scratch/${USER}/.conda $HOME/.conda
```
On similar lines, you can also create a cache and local folders on the scratch storage and link to them in your home directory. This may also help you avoid storage issues related to `pip`.
```bash
mkdir -p /scratch/${USER}/.cache
ln -s /scratch/${USER}/.cache $HOME/.cache
mkdir -p /scratch/${USER}/.local
ln -s /scratch/${USER}/.local $HOME/.local
```


## Running jobs on GPU nodes
### Sample sbatch script from actual project
```bash
#!/bin/sh

# You can control the resources and scheduling with '#SBATCH' settings
# (see 'man sbatch' for more information on setting these parameters)


#SBATCH --job-name="CasMVS"                 # project name
#SBATCH --partition=gpu                     # partition name it means i want to use gpu
#SBATCH --time=02:00:00                     # time limit (HH:MM:SS)
#SBATCH --ntasks=1                          # number of parallel tasks per job is 1
#SBATCH --cpus-per-task=24                  # number of cores per task    
#SBATCH --gpus-per-task=1                   # number of GPUs per task
#SBATCH --mem-per-cpu=1G                    # memory per CPU core
#SBATCH --account=research-abe-ur           # account name


# Measure GPU usage of your job (initialization)
previous=$(nvidia-smi --query-accounted-apps='gpu_utilization,mem_utilization,max_memory_usage,time' --format='csv' | /usr/bin/tail -n '+2')

# Use this simple command to check that your sbatch settings are working (it should show the GPU that you requested)
nvidia-smi

# Your job commands go below here

#module load 2022r2
#module load cuda/11.6

srun python train.py    --dataset_name dtu    --root_dir /scratch/<netid>/DTU/dtu/    --num_epochs 16 --batch_size 2    --depth_interval 2.65 --n_depths 8 32 48 --interval_ratios 1.0 2.0 4.0    --optimizer adam --lr 1e-3 --lr_scheduler cosine    --exp_name dtu_cas_group_8 --num_groups 8 --num_gpus 1 > test.log


# Your job commands go above here

# Measure GPU usage of your job (result)
nvidia-smi --query-accounted-apps='gpu_utilization,mem_utilization,max_memory_usage,time' --format='csv' | /usr/bin/grep -v -F "$previous"

```

# Contribute 
If you find any errors or have any suggestions, please feel free to open an issue or pull request in [git](https://github.com/Mirmix/tudelft-hpc-tutorial).

## Kudos
- Zexin Yang for INSY tutorial
- [SLURM documentation](https://slurm.schedmd.com/documentation.html)
- [DelftBlue documentation](https://doc.dhpc.tudelft.nl/)
- [INSY documentation](https://login.hpc.tudelft.nl/)
