![GitHub Action CI](https://img.shields.io/github/workflow/status/prosellen/isthereworldpeaceyet.com/CI)

# isthereworldpeaceyet.com

My first experiment with Gatsby, builing on the [Hello World starter](https://github.com/gatsbyjs/gatsby-starter-hello-world)

## Lets Encrypt Cert:

```
sudo certbot certonly --manual --preferred-challenges=dns --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d '*.isthereworldpeaceyet.com'
(https://medium.com/@deepak13245/hosting-a-https-static-websites-using-s3-and-lets-encrypt-6f3e53014ff2)
```
