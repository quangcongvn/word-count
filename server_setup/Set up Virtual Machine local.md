centos7 minimal ISO<br>
setup network: https://adminvietnam.org/cau-hinh-static-ip-tren-centos-7/2186/
    * type = __static__
    * ip, netmask, gateway like ipconfig cmd windows
    * onboot=__yes__

setup guess<br> 
https://www.tecmint.com/install-virtualbox-guest-additions-in-centos-rhel-fedora/

Startup scripts: https://www.centos.org/forums/viewtopic.php?t=48140

share folder: https://www.sitecuatui.com/shared-folders-virtualbox/
https://www.virtualbox.org/manual/ch04.html#sf_mount_auto


# Share folder
Virtual box share folder:
* document: https://www.virtualbox.org/manual/ch04.html#sf_mount_auto
* Prerequisite: 
    * Install VirtualBox Guest Additions: https://www.tecmint.com/install-virtualbox-guest-additions-in-centos-rhel-fedora/
    * step 1: install basic app     
        * yum -y install epel-release
        * yum -y update
        * yum install make gcc kernel-headers kernel-devel perl dkms bzip2 -y
        * export KERN_DIR=/usr/src/kernels/$(uname -r)
    * step 2: Install Guest Additions
        * Go Menu __Devices__ > __Insert Guess Addtions CD Image__.
        * mount -r /dev/cdrom /media
        * cd /media/
        * ./VBoxLinuxAdditions.run
    * step 3: setup Share folder
        * Go menu __Devices__ > **Shared folder...**
        * Reboot
        * Shared folder will locate: **/media/sf_{folder name}** , if share folder not appear, __reboot__ again.
    * step 4: run LAMP_local.txt scripts 
 
 
 _move to LAMP_local.txt script for run after install apache_
 
		* add apache permission to Vbox share folder:  
		    * usermod -a -G vboxsf apache
		* disable and SElinux and add to startup<br>
		    * chmod +x /etc/rc.d/rc.local && echo "# disable SELinux" >> /etc/rc.d/rc.local && echo "getenforce" >> /etc/rc.d/rc.local && echo "setenforce 0" >> /etc/rc.d/rc.local
		<br>
		( TECHNIQUE turn off SElinux: https://askubuntu.com/a/591181  
			* getenforce
			* setenforce 0
			* required run on startup
		)
			
        