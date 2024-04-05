import imaplib
import email
import os
from unidecode import unidecode

# Configurar as informações da conta e servidor
login = "josesousacruzfh@gmail.com"
senha = "qasbpezfgviaaaun"
servidor = "imap.gmail.com"
palavra_chave_corpo = "Nro. Unico Autorização:"


# pasta_destino = "anexos"  # Pasta onde você deseja salvar os anexos

def remover_acentos(texto):
    return unidecode(texto).lower()

# Criar uma instância IMAP4_SSL e conectar-se ao servidor
con = imaplib.IMAP4_SSL(servidor)

# Fazer o login na conta de e-mail
con.login(login, senha)

con.select(mailbox='inbox', readonly=True)
resposta, idDosEmail = con.search(None, 'All')

# # Criar a pasta de destino se não existir
# if not os.path.exists(pasta_destino):
#     os.makedirs(pasta_destino)

for num in idDosEmail[0].split():
    result, dados = con.fetch(num, 'RFC822')
    texto = dados[0][1]
    texto = texto.decode('utf-8')
    mensagem = email.message_from_string(texto)

    # Verificar se a palavra-chave está presente no corpo do e-mail
    for part in mensagem.walk():
        if part.get_content_type() == 'text/plain':
            try:
                corpo_email = part.get_payload(decode=True).decode('utf-8')
            except UnicodeDecodeError:
                # Se UTF-8 falhar, tente outra codificação aqui, talvez 'latin1'
                corpo_email = part.get_payload(decode=True).decode('latin1')

            if remover_acentos(palavra_chave_corpo.lower()) in remover_acentos(corpo_email.lower()):
                print("Corpo do e-mail:\n", corpo_email)


    # # Verificar se o assunto do e-mail contém a palavra "XML"
    # if "XML" in mensagem["subject"].upper():
    #     for part in mensagem.walk():
    #         if part.get_content_maintype() == 'multipart':
    #             continue
    #         if part.get('Content-Disposition') is None:
    #             continue
    #
    #         # Verificar a extensão do arquivo (assumindo que o nome do arquivo está na parte "Content-Disposition")
    #         nome_arquivo = part.get_filename()
    #         if nome_arquivo and nome_arquivo.lower().endswith(".xml"):
    #             caminho_arquivo = os.path.join(pasta_destino, nome_arquivo)
    #
    #             # Verificar se o arquivo já existe na pasta de destino
    #             if not os.path.exists(caminho_arquivo):
    #                 with open(caminho_arquivo, 'wb') as arquivo:
    #                     arquivo.write(part.get_payload(decode=True))
    #
    #                 print(f"Anexo do e-mail com assunto contendo 'XML' salvo: {caminho_arquivo}")
    #             else:
    #                 print(f"Arquivo '{nome_arquivo}' já existe na pasta, não foi baixado novamente")

# Fechar a conexão quando terminar
con.logout()
