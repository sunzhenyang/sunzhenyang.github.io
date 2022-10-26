import{_ as s,o as e,c as n,e as a}from"./app.41291239.js";const i={},l=a(`<h2 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h2><p><code>df</code>\u547D\u4EE4\u67E5\u770B\u786C\u76D8\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">df</span>
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/sda2 <span class="token number">15115452</span> <span class="token number">5012392</span> <span class="token number">9949716</span> <span class="token number">34</span>% /
/dev/sda5 <span class="token number">59631908</span> <span class="token number">26545424</span> <span class="token number">30008432</span> <span class="token number">47</span>% /home
/dev/sda1 <span class="token number">147764</span> <span class="token number">17370</span> <span class="token number">122765</span> <span class="token number">13</span>% /boot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="free" tabindex="-1"><a class="header-anchor" href="#free" aria-hidden="true">#</a> free</h2><p><code>free</code>\u547D\u4EE4\u67E5\u770B\u5185\u5B58\u5360\u7528\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">free</span>
 total used <span class="token function">free</span> shared buffers cached
Mem: <span class="token number">513712</span> <span class="token number">503976</span> <span class="token number">9736</span> <span class="token number">0</span> <span class="token number">5312</span> <span class="token number">122916</span>
-/+ buffers/cache: <span class="token number">375748</span> <span class="token number">137964</span>
Swap: <span class="token number">1052248</span> <span class="token number">104712</span> <span class="token number">947536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u786C\u76D8" tabindex="-1"><a class="header-anchor" href="#\u786C\u76D8" aria-hidden="true">#</a> \u786C\u76D8</h2><p>\u6587\u4EF6<code>/etc/fstab</code>\u914D\u7F6E\u7CFB\u7EDF\u542F\u52A8\u65F6\u8981\u6302\u8F7D\u7684\u8BBE\u5907\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LABEL=/12               /               ext3        defaults        1   1
LABEL=/home             /home           ext3        defaults        1   2
LABEL=/boot             /boot           ext3        defaults        1   2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E00\u5171\u67096\u4E2A\u5B57\u6BB5\uFF0C\u542B\u4E49\u4F9D\u6B21\u5982\u4E0B\u3002</p><ul><li>\u8BBE\u5907\u540D\uFF1A\u4E0E\u7269\u7406\u8BBE\u5907\u76F8\u5173\u8054\u7684\u8BBE\u5907\u6587\u4EF6\uFF08\u6216\u8BBE\u5907\u6807\u7B7E\uFF09\u7684\u540D\u5B57\uFF0C\u6BD4\u5982\u8BF4<code>/dev/hda1</code>\uFF08\u7B2C\u4E00\u4E2A IDE \u901A\u9053\u4E0A\u7B2C\u4E00\u4E2A\u4E3B\u8BBE\u5907\u5206\u533A\uFF09\u3002</li><li>\u6302\u8F7D\u70B9\uFF1A\u8BBE\u5907\u6240\u8FDE\u63A5\u5230\u7684\u6587\u4EF6\u7CFB\u7EDF\u6811\u7684\u76EE\u5F55\u3002</li><li>\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\uFF1ALinux \u5141\u8BB8\u6302\u8F7D\u8BB8\u591A\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u3002</li><li>\u9009\u9879\uFF1A\u6587\u4EF6\u7CFB\u7EDF\u53EF\u4EE5\u901A\u8FC7\u5404\u79CD\u5404\u6837\u7684\u9009\u9879\u6765\u6302\u8F7D\u3002</li><li>\u9891\u7387\uFF1A\u4E00\u4F4D\u6570\u5B57\uFF0C\u6307\u5B9A\u662F\u5426\u548C\u5728\u4EC0\u4E48\u65F6\u95F4\u7528 dump \u547D\u4EE4\u6765\u5907\u4EFD\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li>\u6B21\u5E8F\uFF1A\u4E00\u4F4D\u6570\u5B57\uFF0C\u6307\u5B9A fsck \u547D\u4EE4\u6309\u7167\u4EC0\u4E48\u6B21\u5E8F\u6765\u68C0\u67E5\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ul><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h2><p><code>mount</code>\u4E0D\u5E26\u53C2\u6570\u65F6\uFF0C\u663E\u793A\u5F53\u524D\u6302\u8F7D\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mount</span>
/dev/sda2 on / <span class="token builtin class-name">type</span> ext3 <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
proc on /proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
sysfs on /sys <span class="token builtin class-name">type</span> sysfs <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
devpts on /dev/pts <span class="token builtin class-name">type</span> devpts <span class="token punctuation">(</span>rw,gid<span class="token operator">=</span><span class="token number">5</span>,mode<span class="token operator">=</span><span class="token number">620</span><span class="token punctuation">)</span>
/dev/sda5 on /home <span class="token builtin class-name">type</span> ext3 <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u5217\u8868\u7684\u683C\u5F0F\u662F\uFF1A\u8BBE\u5907 on \u6302\u8F7D\u70B9 type \u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\uFF08\u53EF\u9009\u7684\uFF09\u3002</p><p><code>mount</code>\u5E26\u53C2\u6570\u65F6\uFF0C\u7528\u4E8E\u5C06\u8BBE\u5907\u6587\u4EF6\u6302\u8F7D\u5230\u6302\u8F7D\u70B9\uFF0C<code>-t</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mount</span> -t iso9660 /dev/hdc /mnt/cdrom

<span class="token comment"># \u6302\u8F7D\u4E00\u4E2Aiso\u6587\u4EF6</span>
$ <span class="token function">mount</span> -t iso9660 -o loop image.iso /mnt/iso_image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="umount" tabindex="-1"><a class="header-anchor" href="#umount" aria-hidden="true">#</a> umount</h2><p><code>umount</code>\u547D\u4EE4\u7528\u6765\u5378\u8F7D\u8BBE\u5907\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">umount</span> <span class="token punctuation">[</span>\u8BBE\u5907\u540D<span class="token punctuation">]</span>

$ <span class="token function">umount</span> /dev/hdc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk" aria-hidden="true">#</a> fdisk</h2><p><code>fdisk</code>\u547D\u4EE4\u7528\u4E8E\u683C\u5F0F\u5316\u78C1\u76D8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">umount</span> /dev/sdb1
$ <span class="token function">sudo</span> <span class="token function">fdisk</span> /dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mkfs" tabindex="-1"><a class="header-anchor" href="#mkfs" aria-hidden="true">#</a> mkfs</h2><p><code>mkfs</code>\u547D\u4EE4\u7528\u4E8E\u5728\u4E00\u4E2A\u8BBE\u5907\u4E0A\u65B0\u5EFA\u6587\u4EF6\u7CFB\u7EDF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">mkfs</span> -t ext3 /dev/sdb1
$ <span class="token function">sudo</span> <span class="token function">mkfs</span> -t vfat /dev/sdb1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fsck" tabindex="-1"><a class="header-anchor" href="#fsck" aria-hidden="true">#</a> fsck</h2><p><code>fsck</code>\u547D\u4EE4\u7528\u4E8E\u68C0\u67E5\uFF08\u4FEE\u590D\uFF09\u6587\u4EF6\u7CFB\u7EDF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">fsck</span> /dev/sdb1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dd" tabindex="-1"><a class="header-anchor" href="#dd" aria-hidden="true">#</a> dd</h2><p><code>dd</code>\u547D\u4EE4\u7528\u4E8E\u5C06\u5927\u578B\u6570\u636E\u5757\uFF0C\u4ECE\u4E00\u4E2A\u78C1\u76D8\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u78C1\u76D8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>input_file <span class="token assign-left variable">of</span><span class="token operator">=</span>output_file <span class="token punctuation">[</span>bs<span class="token operator">=</span>block_size <span class="token punctuation">[</span>count<span class="token operator">=</span>blocks<span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># \u5C06 /dev/sdb \u7684\u6240\u6709\u6570\u636E\u590D\u5236\u5230 /dev/sdc</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdc

<span class="token comment"># \u5C06 /dev/sdb \u7684\u6240\u6709\u6570\u636E\u62F7\u8D1D\u5230\u4E00\u4E2A\u955C\u50CF\u6587\u4EF6</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sdb <span class="token assign-left variable">of</span><span class="token operator">=</span>flash_drive.img

<span class="token comment"># \u4ECEcdrom\u5236\u4F5C\u4E00\u4E2Aiso\u6587\u4EF6</span>
$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/cdrom <span class="token assign-left variable">of</span><span class="token operator">=</span>ubuntu.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dmidecode" tabindex="-1"><a class="header-anchor" href="#dmidecode" aria-hidden="true">#</a> dmidecode</h2><p><code>dmidecode</code>\u547D\u4EE4\u7528\u4E8E\u8F93\u51FABIOS\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dmidecode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u547D\u4EE4\u4F1A\u8F93\u51FA\u5168\u90E8BIOS\u4FE1\u606F\u3002\u4E3A\u4E86\u4FBF\u4E8E\u67E5\u770B\uFF0C\u5F80\u5F80\u9700\u8981\u6307\u5B9A\u6240\u9700\u4FE1\u606F\u7684\u7C7B\u522B\u3002</p><ul><li>0 BIOS</li><li>1 System</li><li>2 Base Board</li><li>3 Chassis 4 Processor</li><li>5 Memory Controller</li><li>6 Memory Module</li><li>7 Cache</li><li>8 Port Connector</li><li>9 System Slots</li><li>10 On Board Devices</li><li>11 OEM Strings</li><li>12 System Configuration Options</li><li>13 BIOS Language</li><li>14 Group Associations</li><li>15 System Event Log</li><li>16 Physical Memory Array</li><li>17 Memory Device</li><li>18 32-bit Memory Error</li><li>19 Memory Array Mapped Address</li><li>20 Memory Device Mapped Address</li><li>21 Built-in Pointing Device</li><li>22 Portable Battery</li><li>23 System Reset</li><li>24 Hardware Security</li><li>25 System Power Controls</li><li>26 Voltage Probe</li><li>27 Cooling Device</li><li>28 Temperature Probe</li><li>29 Electrical Current Probe</li><li>30 Out-of-band Remote Access</li><li>31 Boot Integrity Services</li><li>32 System Boot</li><li>33 64-bit Memory Error</li><li>34 Management Device</li><li>35 Management Device Component</li><li>36 Management Device Threshold Data</li><li>37 Memory Channel</li><li>38 IPMI Device</li><li>39 Power Supply</li></ul><p>\u67E5\u770B\u5185\u5B58\u4FE1\u606F\u7684\u547D\u4EE4\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dmidecode -t <span class="token number">17</span>
<span class="token comment"># \u6216\u8005</span>
$ dmidecode --type <span class="token number">17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u662F\u5176\u4ED6\u4E00\u4E9B\u9009\u9879\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770BBIOS\u4FE1\u606F</span>
$ <span class="token function">sudo</span> dmidecode \u2013t <span class="token number">0</span>

<span class="token comment"># \u67E5\u770BCPU\u4FE1\u606F</span>
$ <span class="token function">sudo</span> dmidecode -t <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>dmidecode</code>\u4E5F\u652F\u6301\u5173\u952E\u8BCD\u67E5\u770B\uFF0C\u5173\u952E\u8BCD\u4E0E\u7C7B\u522B\u7684\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B\u3002</p><ul><li>bios 0, 13</li><li>system 1, 12, 15, 23, 32</li><li>baseboard 2, 10</li><li>chassis 3</li><li>processor 4</li><li>memory 5, 6, 16, 17</li><li>cache 7</li><li>connector 8</li><li>slot 9</li></ul><p>\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F\u7684\u547D\u4EE4\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dmidecode -t system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lspci" tabindex="-1"><a class="header-anchor" href="#lspci" aria-hidden="true">#</a> lspci</h2><p><code>lspci</code>\u547D\u4EE4\u5217\u51FA\u672C\u673A\u7684\u6240\u6709PCI\u8BBE\u5907\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lspci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u547D\u4EE4\u8F93\u51FA\u4FE1\u606F\u7684\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>03:00.0 Unassigned class <span class="token punctuation">[</span>ff00<span class="token punctuation">]</span>: Realtek Semiconductor Co., Ltd. RTS5209 PCI Express Card Reader <span class="token punctuation">(</span>rev 01<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u4FE1\u606F\u4E00\u5171\u5206\u6210\u4E09\u4E2A\u5B57\u6BB5\u3002</p><ul><li>Field 1\uFF1APCI bus slot \u7684\u7F16\u53F7</li><li>Field 2\uFF1APCI slot\u7684\u540D\u5B57</li><li>Field 3\uFF1A\u8BBE\u5907\u540D\u548C\u5382\u5546\u540D</li></ul><p>\u5982\u679C\u60F3\u67E5\u770B\u66F4\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lspci -vmm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lsusb" tabindex="-1"><a class="header-anchor" href="#lsusb" aria-hidden="true">#</a> lsusb</h2><p><code>lsusb</code>\u547D\u4EE4\u7528\u4E8E\u64CD\u4F5CUSB\u7AEF\u53E3\u3002</p><p>\u4E0B\u9762\u547D\u4EE4\u5217\u51FA\u672C\u673A\u6240\u6709USB\u7AEF\u53E3\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lsusb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B83\u7684\u8F93\u51FA\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Bus 002 Device 003: ID 0781:5567 SanDisk Corp. Cruzer Blade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5404\u4E2A\u5B57\u6BB5\u7684\u542B\u4E49\u5982\u4E0B\u3002</p><ul><li>Bus 002 : bus\u7F16\u53F7</li><li>Device 003\uFF1Abus 002\u8FDE\u63A5\u7684\u7B2C\u4E09\u4E2A\u8BBE\u5907</li><li>ID 0781:5567\uFF1A\u5F53\u524D\u8BBE\u5907\u7684\u7F16\u53F7\uFF0C\u5192\u53F7\u524D\u662F\u5382\u5546\u7F16\u53F7\uFF0C\u5192\u53F7\u540E\u662F\u8BBE\u5907\u7F16\u53F7</li><li>SanDisk Corp. Cruzer Blade\uFF1A\u5382\u5546\u548C\u8BBE\u5907\u540D</li></ul><p>\u627E\u51FA\u672C\u673A\u6709\u591A\u5C11\u4E2AUSB\u63A5\u53E3\u53EF\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">find</span> /dev/bus/
/dev/bus/
/dev/bus/usb
/dev/bus/usb/002
/dev/bus/usb/002/006
/dev/bus/usb/002/005
/dev/bus/usb/002/004
/dev/bus/usb/002/002
/dev/bus/usb/002/001
/dev/bus/usb/001
/dev/bus/usb/001/007
/dev/bus/usb/001/003
/dev/bus/usb/001/002
/dev/bus/usb/001/001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u67D0\u4E2AUSB\u8BBE\u5907\u7684\u8BE6\u7EC6\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lsusb -D /dev/bus/usb/002/005
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u6240\u6709\u8BBE\u5907\u7684\u8BE6\u7EC6\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lsusb -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770BUSB\u7AEF\u53E3\u7684\u7248\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lsusb -v <span class="token operator">|</span> <span class="token function">grep</span> -i bcdusb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,70),d=[l];function c(o,r){return e(),n("div",null,d)}var t=s(i,[["render",c],["__file","hardware.html.vue"]]);export{t as default};
