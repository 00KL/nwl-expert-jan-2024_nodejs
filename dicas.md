### Mapping do node targer:

https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping

### Prisma: Configurando extensão no VSCode

- Instale a extensão Prisma no seu Visual Studio Code.
- Abra a Paleta de Comandos:
  Se estiver no Windows ou Linux: CTRL + SHIFT + P
  Se estiver no macOS: CMD + SHIFT + P
- Abra as configurações em JSON buscando por:
  Se o seu VSCode estiver em português: Abrir as Configurações do usuário (JSON)
  Se o seu VSCode estiver em inglês: Open User Settings (JSON)
- Adicione dentro do JSON o código abaixo:
  ```
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true
  },
  ```

### pub/sub - publish subscribers
