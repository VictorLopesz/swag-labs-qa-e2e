## FUNCIONALIDADE: Swag Labs - Autenticação, carrinho e Checkout

Como usuário do Swag Labs, quero realizar login, manipular o carrinho e finalizar uma compra para
validar o funcionamento correto da aplicação.

# CT-001

Cenário: Login com sucesso

Dado que acesso a página de login do Swag Labs
Quando informo o usuário "standard_user"
E a senha "secret_sauce"
E clico no botão de Login
Então devo ser redirecionado para a página de inventário
E devo visualizar o título "Products"

# CT-002

Cenário: Login com senha inválida

Dado que acesso a página de login do Swag Labs
Quando informo o usuário "standard_user"
E a senha "123"
E clico no botão de Login
Então devo visualizar a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

# CT-003

Cenário: Login com usuário bloqueado

Dado que acesso a página de login do Swag Labs
Quando informo o usuário "locked_out_user"
E informo a senha "secret_sauce"
E clico no botão de Login
Então devo visualizar a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

# CT-004

Cenário: Login com campos em branco

Dado que acesso a página de login do Swag Labs
Quando não preencho nem usuário e nem senha
E clico no botão de Login
Então devo visualizar a mensagem de erro "Epic sadface: Username is required"

# CT-005

Cenário: Adicionar produto ao carrinho

Dado que estou autenticado com o usuário "standard_user" e senha "secret_sorce"
E estou na página de inventário
Quando adiciono o produto "Sauce Labs Blackpack" ao carrinho
Então o ícone do carrinho deve exibir "1"
E ao abrir o carro devo ver o item "Sauce Labs Blackpack" listado

# CT-006

Cenário: Remover produto do carrinho

Dado que estou autenticado com o usuário "standard_user" e senha "secret_sorce"
E adiciono o produto "Sauce Labs Blackpack" ao carrinho
E acesso a página do carrinho
Quando removo o produto "Sauce Labs Blackpack" do carrinho
Então o carrinho não deve conter mais itens
E o ícone do carrinho não deve exibir quantidade

# CT-007

Cenário: Checkout com sucesso

Dado que estou autenticado com o usuário "standard_user" e senha "secret_sorce"
E adiciono o produto "Sauce Labs Blackpack" ao carrinho
E acesso a página do carrinho
Quando inicio o checkout
E preencho os dados da entrega com o Nome "Victor", Sobrenome "Lopes" e CEP "23520-572"
E avanço para a revisão
E finalizo a compra
Então devo visualizar a mensagem "THANK YOU FOR YOUR ORDER"

# CT-008

Cenário: Checkout com campos obrigatórios vazios

Dado que estou autenticado com o usuário "standard_user" e senha "secret_sorce"
E adiciono o produto "Sauce Labs Blackpack" ao carrinho
E acesso a página do carrinho
Quando inicio o checkout
E deixo os campos Nome, Sobrenome e CEP vazios
E tento avançar para a revisão
Então devo visualizar a mensagem de erro "Error: First Name is required"

# CT-009

Cenário: Ordenar produtos por preço (menor para maior)

Dado que estou autenticado com o usuário "standard_user" e senha "secret_sorce"
E estou na página de inventário
Quando ordeno os produtos por "Price (low to high)"
Então os preços exibidos devem estar em ordem crescente

# CT-010

Cenário: Logout com sucesso
Dado que estou autenticado com o usuário "standard_user" e senha "secret_sorce"
E estou na página de inventário
Quando abro o menu lateral
E clico em Logout
Então devo ser redirecionado para página de login
E o formulário de login deve estar visível
