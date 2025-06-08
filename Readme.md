This is the basic swa for scrypt signups


## How Deployment Works
1. Any change on main branch gets available on the production env endpoint 
2. Any PR from otherBranch -> main creats a preview Environemnt endpoint which can be used for visual testing 
3. Once PR is merged this env goes away. 
4. To view preview endpoint: scrypt-sws->environments ->click browse on preview env
5. This all function is carried out using github workflows 

## How DNS Routing is working 
1. Currently `www.scrypt.co.in` has its nameserver in `GoDaddy`
2. `GoDaddy` does not support root domain routing and hence we are routing `www.scrypt.co.in` and not `scrypt.co.in`. To enable this we would have to switch namespace server from `GoDaddy` to Azure. 
3. `www.scrypt.co.in` has been added as a DNS Record in `GoDaddy`
4. And a custom domain has been created in Azure