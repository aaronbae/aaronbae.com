sudo apt update
sudo apt-get upgrade
sudo apt install apache2

#############################
# copy over '/etc/ssl/aaronbae.key'
#############################
sudo echo "-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAymYJN4OUFAZITV9yfmFUqt3WqogClqzX5/brH3AIPHWvAHQP
2aj1rO+xXlXZBXAKkYyWp9ZfGxwj9i9JRosQAYK304xbKZAgJzwY4s5eKXAs8VP4
qOa7tk7+2Ly/ZGPO15iiza57dkJIlO9qAm0kgzONg90BjvrCWNWDvY40ccGKL7Nq
dY3mgM9ElhJkHkePZHHEZdhi/EKIPhIIJKKp77DzuQ3tIRlhGsKNrBw6ROUbxaAf
Q+dSKURfrkfiyGnr/ItuyaKLEuA6Xl+YV3hbVuUV7BPhRvoe1DSClCOMtWRJPFpB
FWVw2RRpc4yRfqwUVGR2wsN9C0AOHlIgLDRFpQIDAQABAoIBAHeapIexsafDrqZK
aRZV3fq67UgI576ylUP2nisNwVA5GxlhfJxbRBLV8jKU+JJGC3jHY5/7Bmi20GmC
uAJ/2w2JeagBoT2Gdfm5gdtFqE9Egsp5nM/yyaqKM/9QSqnAcVLmWA7DtSHFOa8J
a9PTO2hs5out5mXfuUlVo2w4xLUTZJY8Vdmd/d3b7amqn2RVAyuntPWUKq1hNBLS
OjlnGDGNnfrNCdsVaKtL4e2CbBFvZx45FMaqv9z6cQGZfD8N89/WZW76FME9HDHf
gLMQdyLvi0XGvOjaHMbOPNpI4zeta1WWamFb9Kq04Tnn9Z7hTcNas1QVZl/C/vNc
RZVqK2ECgYEA7acq7aD4RNY6uuzsrZ2uiMeMSCpQ4Fi69VALLwaY+luh5VZpcRYw
xWsb6251atteHJm2Jqrfz9GMmpZOp7v/aWjBMWi96LfxjVVHjkC6+AtNvLEzrLo2
Qc0n2pa58U7tnH/a7nS7DSyfZh8YlNRZ3D3s7ZY0N+RPo/9FA85s9gsCgYEA2gYe
9jURbkr1VzpArPALCru1GDLL4nM5FoaMclglYqGcaXHaPACMdqoReRb3ZDIVnWi5
/NR4r4Ffk59jD6ENQqhzoz7yQMRCnbThxA57iSLUBACjy/PkB/YbfeSFLMSkPSLd
WLXh0oW8zN6thnuHLQE0mK0puJyJ8D1v1acFcQ8CgYAL9Kn7NGrpA6IGv16UyWb7
aJaNFtvkvXICX1mAryNJDQ0S/YrmbohblizcZj0v+AM/CxiXz2bdDJy3NjKUy6do
xSVa9/r91ysmwhCMfoMpcWAiywNfgCq0mr6Th5upISBhDCmWb3btjb4jJBNXgWtX
4iGmPjU4TpsXFAOD0oG2ywKBgDubvM9XxwI+oEFO/evKXVp745FQIgoxsoQEGVYR
33bN9LOnmyEYjU7MRKa0rsLIJry4q1ECzlQ9rOHxi+X0BGobIDKbvSQUBJqVn7w4
sXHXAdxuSFo0vj2m/fE3j2mkAbttUtM0Nx+VzP6+Svcfwt99GuI7RdLhiZ0TTwY8
+fHlAoGBALvasLq64xGE8h3pZtUhDJWExdlu4u8YP+RsT1GS5sy4RaUUvRYaL10v
jW0euDIcUVNZiUyImpXktX5fkPTZLN7m0+RGoSZvkKwIQP0UYSW4hRqYIU7PvvoU
0BsIQ5viIi+zLX/4R6d61HT18KWbn66PQ+iU7O/XMNxzta3aLenO
-----END RSA PRIVATE KEY-----
" > /etc/ssl/aaronbae.key

#############################
# copy over '/etc/ssl/www_aaronbae_com.ca-bundle'
#############################
sudo echo "-----BEGIN CERTIFICATE-----
MIIGEzCCA/ugAwIBAgIQfVtRJrR2uhHbdBYLvFMNpzANBgkqhkiG9w0BAQwFADCB
iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCk5ldyBKZXJzZXkxFDASBgNVBAcTC0pl
cnNleSBDaXR5MR4wHAYDVQQKExVUaGUgVVNFUlRSVVNUIE5ldHdvcmsxLjAsBgNV
BAMTJVVTRVJUcnVzdCBSU0EgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTgx
MTAyMDAwMDAwWhcNMzAxMjMxMjM1OTU5WjCBjzELMAkGA1UEBhMCR0IxGzAZBgNV
BAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4GA1UEBxMHU2FsZm9yZDEYMBYGA1UE
ChMPU2VjdGlnbyBMaW1pdGVkMTcwNQYDVQQDEy5TZWN0aWdvIFJTQSBEb21haW4g
VmFsaWRhdGlvbiBTZWN1cmUgU2VydmVyIENBMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEA1nMz1tc8INAA0hdFuNY+B6I/x0HuMjDJsGz99J/LEpgPLT+N
TQEMgg8Xf2Iu6bhIefsWg06t1zIlk7cHv7lQP6lMw0Aq6Tn/2YHKHxYyQdqAJrkj
eocgHuP/IJo8lURvh3UGkEC0MpMWCRAIIz7S3YcPb11RFGoKacVPAXJpz9OTTG0E
oKMbgn6xmrntxZ7FN3ifmgg0+1YuWMQJDgZkW7w33PGfKGioVrCSo1yfu4iYCBsk
Haswha6vsC6eep3BwEIc4gLw6uBK0u+QDrTBQBbwb4VCSmT3pDCg/r8uoydajotY
uK3DGReEY+1vVv2Dy2A0xHS+5p3b4eTlygxfFQIDAQABo4IBbjCCAWowHwYDVR0j
BBgwFoAUU3m/WqorSs9UgOHYm8Cd8rIDZsswHQYDVR0OBBYEFI2MXsRUrYrhd+mb
+ZsF4bgBjWHhMA4GA1UdDwEB/wQEAwIBhjASBgNVHRMBAf8ECDAGAQH/AgEAMB0G
A1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAbBgNVHSAEFDASMAYGBFUdIAAw
CAYGZ4EMAQIBMFAGA1UdHwRJMEcwRaBDoEGGP2h0dHA6Ly9jcmwudXNlcnRydXN0
LmNvbS9VU0VSVHJ1c3RSU0FDZXJ0aWZpY2F0aW9uQXV0aG9yaXR5LmNybDB2Bggr
BgEFBQcBAQRqMGgwPwYIKwYBBQUHMAKGM2h0dHA6Ly9jcnQudXNlcnRydXN0LmNv
bS9VU0VSVHJ1c3RSU0FBZGRUcnVzdENBLmNydDAlBggrBgEFBQcwAYYZaHR0cDov
L29jc3AudXNlcnRydXN0LmNvbTANBgkqhkiG9w0BAQwFAAOCAgEAMr9hvQ5Iw0/H
ukdN+Jx4GQHcEx2Ab/zDcLRSmjEzmldS+zGea6TvVKqJjUAXaPgREHzSyrHxVYbH
7rM2kYb2OVG/Rr8PoLq0935JxCo2F57kaDl6r5ROVm+yezu/Coa9zcV3HAO4OLGi
H19+24rcRki2aArPsrW04jTkZ6k4Zgle0rj8nSg6F0AnwnJOKf0hPHzPE/uWLMUx
RP0T7dWbqWlod3zu4f+k+TY4CFM5ooQ0nBnzvg6s1SQ36yOoeNDT5++SR2RiOSLv
xvcRviKFxmZEJCaOEDKNyJOuB56DPi/Z+fVGjmO+wea03KbNIaiGCpXZLoUmGv38
sbZXQm2V0TP2ORQGgkE49Y9Y3IBbpNV9lXj9p5v//cWoaasm56ekBYdbqbe4oyAL
l6lFhd2zi+WJN44pDfwGF/Y4QA5C5BIG+3vzxhFoYt/jmPQT2BVPi7Fp2RBgvGQq
6jG35LWjOhSbJuMLe/0CjraZwTiXWTb2qHSihrZe68Zk6s+go/lunrotEbaGmAhY
LcmsJWTyXnW0OMGuf1pGg+pRyrbxmRE1a6Vqe8YAsOf4vmSyrcjC8azjUeqkk+B5
yOGBQMkKW+ESPMFgKuOXwIlCypTPRpgSabuY0MLTDXJLR27lk8QyKGOHQ+SwMj4K
00u/I5sUKUErmgQfky3xxzlIPK1aEn8=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFdzCCBF+gAwIBAgIQE+oocFv07O0MNmMJgGFDNjANBgkqhkiG9w0BAQwFADBv
MQswCQYDVQQGEwJTRTEUMBIGA1UEChMLQWRkVHJ1c3QgQUIxJjAkBgNVBAsTHUFk
ZFRydXN0IEV4dGVybmFsIFRUUCBOZXR3b3JrMSIwIAYDVQQDExlBZGRUcnVzdCBF
eHRlcm5hbCBDQSBSb290MB4XDTAwMDUzMDEwNDgzOFoXDTIwMDUzMDEwNDgzOFow
gYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpOZXcgSmVyc2V5MRQwEgYDVQQHEwtK
ZXJzZXkgQ2l0eTEeMBwGA1UEChMVVGhlIFVTRVJUUlVTVCBOZXR3b3JrMS4wLAYD
VQQDEyVVU0VSVHJ1c3QgUlNBIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIICIjAN
BgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAgBJlFzYOw9sIs9CsVw127c0n00yt
UINh4qogTQktZAnczomfzD2p7PbPwdzx07HWezcoEStH2jnGvDoZtF+mvX2do2NC
tnbyqTsrkfjib9DsFiCQCT7i6HTJGLSR1GJk23+jBvGIGGqQIjy8/hPwhxR79uQf
jtTkUcYRZ0YIUcuGFFQ/vDP+fmyc/xadGL1RjjWmp2bIcmfbIWax1Jt4A8BQOujM
8Ny8nkz+rwWWNR9XWrf/zvk9tyy29lTdyOcSOk2uTIq3XJq0tyA9yn8iNK5+O2hm
AUTnAU5GU5szYPeUvlM3kHND8zLDU+/bqv50TmnHa4xgk97Exwzf4TKuzJM7UXiV
Z4vuPVb+DNBpDxsP8yUmazNt925H+nND5X4OpWaxKXwyhGNVicQNwZNUMBkTrNN9
N6frXTpsNVzbQdcS2qlJC9/YgIoJk2KOtWbPJYjNhLixP6Q5D9kCnusSTJV882sF
qV4Wg8y4Z+LoE53MW4LTTLPtW//e5XOsIzstAL81VXQJSdhJWBp/kjbmUZIO8yZ9
HE0XvMnsQybQv0FfQKlERPSZ51eHnlAfV1SoPv10Yy+xUGUJ5lhCLkMaTLTwJUdZ
+gQek9QmRkpQgbLevni3/GcV4clXhB4PY9bpYrrWX1Uu6lzGKAgEJTm4Diup8kyX
HAc/DVL17e8vgg8CAwEAAaOB9DCB8TAfBgNVHSMEGDAWgBStvZh6NLQm9/rEJlTv
A73gJMtUGjAdBgNVHQ4EFgQUU3m/WqorSs9UgOHYm8Cd8rIDZsswDgYDVR0PAQH/
BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wEQYDVR0gBAowCDAGBgRVHSAAMEQGA1Ud
HwQ9MDswOaA3oDWGM2h0dHA6Ly9jcmwudXNlcnRydXN0LmNvbS9BZGRUcnVzdEV4
dGVybmFsQ0FSb290LmNybDA1BggrBgEFBQcBAQQpMCcwJQYIKwYBBQUHMAGGGWh0
dHA6Ly9vY3NwLnVzZXJ0cnVzdC5jb20wDQYJKoZIhvcNAQEMBQADggEBAJNl9jeD
lQ9ew4IcH9Z35zyKwKoJ8OkLJvHgwmp1ocd5yblSYMgpEg7wrQPWCcR23+WmgZWn
RtqCV6mVksW2jwMibDN3wXsyF24HzloUQToFJBv2FAY7qCUkDrvMKnXduXBBP3zQ
YzYhBx9G/2CkkeFnvN4ffhkUyWNnkepnB2u0j4vAbkN9w6GAbLIevFOFfdyQoaS8
Le9Gclc1Bb+7RrtubTeZtv8jkpHGbkD4jylW6l/VXxRTrPBPYer3IsynVgviuDQf
Jtl7GQVoP7o81DgGotPmjw7jtHFtQELFhLRAlSv0ZaBIefYdgWOWnU914Ph85I6p
0fKtirOMxyHNwu8=
-----END CERTIFICATE-----
" > /etc/ssl/www_aaronbae_com.ca-bundle

#############################
# copy over '/etc/ssl/www_aaronbae_com.crt'
#############################
sudo echo "-----BEGIN CERTIFICATE-----
MIIGNzCCBR+gAwIBAgIRAMCuMZvPXzTvrSs1KuGRzrQwDQYJKoZIhvcNAQELBQAw
gY8xCzAJBgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAO
BgNVBAcTB1NhbGZvcmQxGDAWBgNVBAoTD1NlY3RpZ28gTGltaXRlZDE3MDUGA1UE
AxMuU2VjdGlnbyBSU0EgRG9tYWluIFZhbGlkYXRpb24gU2VjdXJlIFNlcnZlciBD
QTAeFw0yMDAxMDcwMDAwMDBaFw0yMjAxMDYyMzU5NTlaMBsxGTAXBgNVBAMTEHd3
dy5hYXJvbmJhZS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDK
Zgk3g5QUBkhNX3J+YVSq3daqiAKWrNfn9usfcAg8da8AdA/ZqPWs77FeVdkFcAqR
jJan1l8bHCP2L0lGixABgrfTjFspkCAnPBjizl4pcCzxU/io5ru2Tv7YvL9kY87X
mKLNrnt2QkiU72oCbSSDM42D3QGO+sJY1YO9jjRxwYovs2p1jeaAz0SWEmQeR49k
ccRl2GL8Qog+EggkoqnvsPO5De0hGWEawo2sHDpE5RvFoB9D51IpRF+uR+LIaev8
i27JoosS4DpeX5hXeFtW5RXsE+FG+h7UNIKUI4y1ZEk8WkEVZXDZFGlzjJF+rBRU
ZHbCw30LQA4eUiAsNEWlAgMBAAGjggL/MIIC+zAfBgNVHSMEGDAWgBSNjF7EVK2K
4Xfpm/mbBeG4AY1h4TAdBgNVHQ4EFgQU9NFla1J3XRLbGThLRa953kia0VswDgYD
VR0PAQH/BAQDAgWgMAwGA1UdEwEB/wQCMAAwHQYDVR0lBBYwFAYIKwYBBQUHAwEG
CCsGAQUFBwMCMEkGA1UdIARCMEAwNAYLKwYBBAGyMQECAgcwJTAjBggrBgEFBQcC
ARYXaHR0cHM6Ly9zZWN0aWdvLmNvbS9DUFMwCAYGZ4EMAQIBMIGEBggrBgEFBQcB
AQR4MHYwTwYIKwYBBQUHMAKGQ2h0dHA6Ly9jcnQuc2VjdGlnby5jb20vU2VjdGln
b1JTQURvbWFpblZhbGlkYXRpb25TZWN1cmVTZXJ2ZXJDQS5jcnQwIwYIKwYBBQUH
MAGGF2h0dHA6Ly9vY3NwLnNlY3RpZ28uY29tMCkGA1UdEQQiMCCCEHd3dy5hYXJv
bmJhZS5jb22CDGFhcm9uYmFlLmNvbTCCAX0GCisGAQQB1nkCBAIEggFtBIIBaQFn
AHYARqVV63X6kSAwtaKJafTzfREsQXS+/Um4havy/HD+bUcAAAFvgYuLTgAABAMA
RzBFAiEA9ULT2AfAECiRSWxwx7mKOjt00/1UECcXIPiVlHA9RR8CIEGmeuL2q5gH
p5np6ajSI/jvgZdYIo6j2RMAHnMBa8rNAHUAb1N2rDHwMRnYmQCkURX/dxUcEdkC
wQApBo2yCJo32RMAAAFvgYuL2wAABAMARjBEAiB2znUE1j3Qcf0p6Dkw2Rs0jBUx
0JyrIXIHyN3/J3LTVQIgA5mbF9mUCHZuf4HcPLBFJKT86y0+syutv9PhCh6PJyYA
dgAiRUUHWVUkVpY/oS/x922G4CMmY63AS39dxoNcbuIPAgAAAW+Bi4s7AAAEAwBH
MEUCIQCtxM0Yka5M+HNnvmRgk2+Nm1zFG0gdWAMSi5izGQGKHwIgWoOHLp6CFNna
muvd/VNnf0W2bgEhqSOuQgXIaFsRXL8wDQYJKoZIhvcNAQELBQADggEBAGM7Y9+d
kdz74f4kHQH37G+T0XNlKRmeJ1GYQZQpmRWi76so8yBMDDpNlf7dvjSxnecPQmwU
ApqAe4NKtDvMM6RVFjbY5a17FnqYPqtJFtKPUGMYIQkiCoXATZ6VmNKMgi/yFtY5
cJbadvR04dG68f9DBLd9OEMAVnlAK2RisD5rNdeC6e3j3chWiYP+pz1HKzUXh445
5es+0fbzw+ic24LmGrNh+UWz9r+yS0JuBf/o4yoXGoHKkRiV1iVcQnIByaVtaAq6
cS/M/Hmo+zXkNto1EnCgCza6uYNfOuLrxR7TaJWDvHps+CJnbDCRpmBFNNwXh0Bh
jkpVk15Sm1AsDUQ=
-----END CERTIFICATE-----
" > /etc/ssl/www_aaronbae_com.crt

#############################
# Set SSL Settings
#############################
sudo a2enmod ssl
sudo a2enmod proxy
sudo a2enmod proxy_http


#############################
# copy over '/etc/apache2/sites-available/000-default.conf'
#############################
sudo echo "<VirtualHost *:80>
  ServerName aaronbae.com
  # redirect all HTTP to HTTPS
  Redirect / https://aaronbae.com/
</VirtualHost>
<VirtualHost *:443>
  ServerName aaronbae.com

  # Enable SSL
  SSLEngine on
  SSLCertificateFile /etc/ssl/www_aaronbae_com.crt
  SSLCertificateKeyFile /etc/ssl/aaronbae.key
  SSLCertificateChainFile /etc/ssl/www_aaronbae_com.ca-bundle
  
  # Default apache logging
  ErrorLog   ${APACHE_LOG_DIR}/error.log
  CustomLog  ${APACHE_LOG_DIR}/access.log combined
  LogLevel warn

  # ProxyPass for Node.js
  ProxyPreserveHost On
  ProxyVia Full
  ProxyRequests off
  <Proxy *>
    Order deny,allow
    Allow from all
  </Proxy>

  # backend
  ProxyPass /api/ http://localhost:4000/api/
  ProxyPassReverse /api/ http://localhost:4000/api/

  # frontend
  ProxyPass / http://localhost:3000/
  ProxyPassReverse / http://localhost:3000/
</VirtualHost>
" > /etc/apache2/sites-available/000-default.conf
sudo systemctl apache2 start

#############################
# copy over '.ssh/authorized_keys'
#############################
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCsjlyD5TSAXR3B7qvfv8ZE1GoL9nbPSzZHLzZPdURch9Akn/u9BgkFLWS/HdaNCR4K3vCYup6YTvo69bWSg57Pv1Dyf69HzPLaE2MQGvzBzWLxWxV2UDqY8uUjAyfk/nvGzPNtPpZRo58gVtOz27XD+4McgqMuwtJCDFNCrLjTKxqe44fJKg67vnCP8nJslUATHrNSHvHNrL22eTAEgp5gWrQMXdN53077XfKLxYPm7iFRyPezqYNdHAn0BBGYKSsBdQK70uDyfTabUEZSPCiOKHflCG4FOwDS2vdf/b2n37hWE9QEKim3CLGhtDsB/miHacUA5/Xf5+S/rKAutS4tBfcsVLkdL333y8iCwSs5XMmR3DKwACTm2lSzMQxYJloLr7TpSvFzKLj8ziuutvT1wrBMWJiB0k7JqOp/H+ZREYUHp3AN+jjPopsHn+hR0gxdmNqr2PUR+twPMVMWgWVtct0+pZIfCRYtelsqfwCVrrQL6+lc4PMWKCg+a2NqpWE= aaron@aaronbae.com" >> .ssh/authorized_keys

#############################
# copy over 'shit.sh'
#############################
echo "#!/bin/sh
sudo rm -rf aaronbae.com aaronbae.com.git
git init --bare aaronbae.com.git
sudo chown -R ubuntu aaronbae.com.git
git clone aaronbae.com.git aaronbae.com
cp post-receive aaronbae.com.git/hooks/post-receive" > shit.sh

#############################
# copy over 'post-receive'
#############################
echo "#!/bin/sh
echo '[post-receive] : Post-receive hook initiated'
cd /home/ubuntu/aaronbae.com/
echo '[post-receive] : Changed directory to /home/ubuntu/aaronbae.com/'
sudo git --git-dir=/home/ubuntu/aaronbae.com.git --work-tree=/home/ubuntu/aaronbae.com checkout master -f
echo '[post-receive] : Installing Backend packages'
cd backend
sudo npm install -s
echo '[post-receive] : Restarting Backend'
sudo pm2 restart backend
echo '[post-receive] : Installing Frontend packages'
cd ../frontend
sudo npm install -s
echo '[post-receive] : Building Frontend'
sudo npm run build
echo '[post-receive] : Strating Frontend'
sudo pm2 restart frontend
echo '[post-receive] : Restarting Apache2'
sudo service apache2 restart
echo '[post-receive] : Apache2 server status'
sudo systemctl status apache2
echo '[post-receive] : Post-receive hook process finished.'
sudo mkdir ~/aaronbae.com/backend/temp
echo '[post-receive] : Created temp folder for backend.'
echo 'NODE_ENV=development
MONGO_ATLAS_URL=\"mongodb://aaronbae:kingoftheworld123@cluster0-shard-00-01-ecnt3.mongodb.net:27017,cluster0-shard-00-01-ecnt3.mongodb.net:27017,cluster0-shard-00-02-ecnt3.mongodb.net:27017?replicaSet=Cluster0-shard-0\"
MONGO_EC2_URL=\"mongodb://aaronbae:kingoftheworld123@ec2-34-221-91-61.us-west-2.compute.amazonaws.com:27017/aaronbaeDB\"
AWS_SECRET_ACCESS_KEY=RZ57sufBdI9okG5DPgGvLyI7l+FDGVNNOPDmPXyF
FINN_HUB_TOKEN=bt5bjov48v6vdhrudv40
SENTRY_DSN=\"https://c7f35c6182a34d129374dc31f77ae3b5@o418535.ingest.sentry.io/5322885\"
ADMIN_SERVICE_CLIENT=\"108182418653117147059\"
ADMIN_PRIVATE_KEY=\"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCro8k2qF2R5BKi\nl2y4Jdi5uPIGin/Kqox+LE/ZUB3+Q3q09xkEFphXcItE0mP1huCAKA3zsxiXxsde\nF/ICBIz1eyMeQCrSzR56OfXYn04o5VrkQmEDx99xmh+2ZEXsKB42YAyCv//FVGkw\nKbDLeEsstXdfFGLqCLA7sjp37YK3e1+XZwFJujsA83Gp1zNqv7/WaWz+ml7H12NY\nXw9EsEIjSLbgV+k6c2Xg/dyfbBEft29zktjS+WzgDi6glN3SDuD4nal1lUWDt7MU\nK8+C/Srm/GL00siJQasKPBZg/735wfZF/yr4SKbhbA2jkDE0kI3GV+FGloOsPnSo\nfrGkmJUtAgMBAAECggEAKXhcxOaAGSBEemFgxMtsJk9vtrHe934mjNOzBTwMyyLN\nsoyjUDAPZc0M8TduLGQGuSA0YsXKct11zR+2+tLTpfo2/XeegSlLLFf1tP2kmk/0\nGoOJQisYKzAEaoKmvEzjI9soGq0+JJTlB1yDWV36t9YufdwEnCw2PG4vH0vVEfSI\nsyLfVQTuSGieNEGWARbJJ9sERJncUn0QIUpfF5AQTS2OnQMNvDKID2zjGcGwCPs3\nEBi5FA+yK604sX9NxRhyXUgeqiGSyHYWaLZfqmwcPCpH0ypUH98dh5nIvB2OLVSd\nd4CEItSHGnf98mp8OWBLl0hdf+cAOam2t5jar6BCMQKBgQDqVa6X8BQMk5fUaWLJ\n3iPZ4hTCKXOZhywOls4nvtcGftwznO9n6HSSLezw0KQyntNVlHM4rzyPEoikoASC\nx2mImcl0EQT1mQ3K5fz93Rj3EfVzF5nkAUZOnHGqYeKpzwGhPvtctN61sPskNxPx\nK/p6kZsBzOqGMxKma72IVi4gtQKBgQC7gjfmEvQkl45SKkTDZVN0//GwhYaYTVR+\ntmLpF5XmDqDySmfrTO5Gj20haGnLoCFRS78cyMrriff2+VAcXvZqmnZHH8z3BUTb\nFIE3mhOoqQDj/X1S6vQrERtj13/KiQJ1mjvjOgSdd5+zfcsgtjbA6d44rHP+LIgG\ngqsnNoWFmQKBgHpKFqAx6LSbfXubN7OzWrBE/KJK8YnoccR3TMSPIjXAlHfW6VUn\niVYT43fU2iuUmSMrImotgQQFHwwSeegp2tgvsWMB0r28jucY2Ms+y918IMRcR7Im\nPCOgHu1Uwe3uGqKkdJbvyN22q4k9uQl98uxt+h+ZabZ5Br2Uskdo+g+VAoGAUJmy\nA5EEJzKKd+E5e7Bzhmh6cMGE0LT07B7kN4Pu6FxDbML1Fp0UE3qVk3W5fFER4Usp\nFGtvZn4A+8XBXOCpFbvducb+qPQ32+BdhxQQ/T/gZSBSnbDnUhfhaTJ5+QqZ5wls\nUslesH16RYJ+LUqGELi20C+5EHn94qaKgambDYkCgYAGfGZTCZ1SeFzCiGG3oH4C\nz5KjD2bUOz0eJp34UxLpWTIw+6UsX4yKQBzJw7YB6v2K3q8bKQS+2s7KbppezuOk\n/3jI835fceDahJK1DoheWOcCfOpbTdRskguj1vIB/9OjaoRPQCctIeMo3ew6HouD\n4zt20Ka4CcuPOrxByNKDgA==\n-----END PRIVATE KEY-----\n\"
ADMIN_EMAIL=\"aaron@aaronbae.com\"' > ~/aaronbae.com/backend/.env
echo '[post-receive] : Resetted the .env for backend.'
# Below script is just for future references
#sudo pm2 start 'npm run start' --name frontend
" > post-receive

#############################
# Establish permissions
#############################
chmod u+x shit.sh
chmod u+x post-receive
./shit.sh

#############################
# Install Node
#############################
sudo apt install nodejs
sudo apt install npm
sudo npm install pm2 -g

# should be ready to deploy
