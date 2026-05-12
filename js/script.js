const attackData = {
    recon: {
        title: "> 01. RECONHECIMENTO",
        desc: "Coleta de metadados e mapeamento de infraestrutura externa.",
        technical: [
            { nome: "Active Scanning", info: "Análise de pacotes via Nmap para identificar o stack TCP/IP e versões do Kernel." },
            { nome: "DNS Cache Snooping", info: "Verificação de registros DNS visitados recentemente para revelar softwares em nuvem." },
            { nome: "OSINT & Metadata", info: "Extração de metadados de arquivos públicos revelando usuários e caminhos de rede." },
            { nome: "Social Engineering Recon", info: "Coleta de padrões de e-mail e hierarquias via redes profissionais." }
        ],
        defense: "Monitoramento de logs de borda e sanitização de metadados públicos.",
        risk: "ALTO"
    },
    access: {
        title: "> 02. ACESSO INICIAL",
        desc: "A transposição do perímetro de segurança organizacional.",
        technical: [
            { nome: "Drive-by Compromise", info: "Infeção de sites legítimos para explorar vulnerabilidades no navegador do alvo." },
            { nome: "Exploit Public Application", info: "Uso de SQL Injection ou falhas críticas (ex: Log4Shell) em servidores web." },
            { nome: "Valid Accounts", info: "Uso de credenciais vazadas ou compradas na Dark Web para acesso legítimo." },
            { nome: "Supply Chain Attack", info: "Comprometimento de softwares de terceiros distribuídos via atualizações oficiais." }
        ],
        defense: "MFA obrigatório e auditoria rigorosa de softwares de terceiros.",
        risk: "CRÍTICO"
    },
    execution: {
        title: "> 03. EXECUÇÃO",
        desc: "Processamento de código malicioso no ambiente interno.",
        technical: [
            { nome: "Command Interpreter", info: "Abuso de PowerShell ou CMD com comandos codificados em Base64." },
            { nome: "WMI Execution", info: "Uso do Windows Management Instrumentation para execução remota de processos." },
            { nome: "Native API Abuse", info: "Chamadas diretas às APIs do Windows (Win32) para injeção de código em memória." },
            { nome: "User Execution", info: "Payloads disfarçados de documentos que dependem da interação do usuário." }
        ],
        defense: "Modo de linguagem restrita no PowerShell e bloqueio de macros.",
        risk: "CRÍTICO"
    },
    persist: {
        title: "> 04. PERSISTÊNCIA",
        desc: "Mecanismos para manter o controle após reboots.",
        technical: [
            { nome: "Registry Run Keys", info: "Inserção de binários nas chaves de registro que carregam no logon do sistema." },
            { nome: "Account Manipulation", info: "Criação de contas ocultas ou alteração de permissões em contas existentes." },
            { nome: "BITS Jobs", info: "Uso do serviço de transferência do Windows para download de payloads em segundo plano." },
            { nome: "Browser Extensions", info: "Instalação de extensões maliciosas para interceptar tráfego persistentemente." }
        ],
        defense: "Monitoramento de alterações no registro e auditoria de novas contas.",
        risk: "ALTO"
    },
    privesc: {
        title: "> 05. ESCALAÇÃO DE PRIVILÉGIO",
        desc: "Busca por controle total (Admin/Root) sobre o alvo.",
        technical: [
            { nome: "UAC Bypass", info: "Exploração de caminhos de confiança do SO para elevar privilégios sem alertas." },
            { nome: "Token Manipulation", info: "Sequestro de tokens de acesso de administradores logados para clonar identidade." },
            { nome: "Process Injection", info: "Injeção de código em processos SYSTEM (ex: lsass.exe) para herdar permissões." },
            { nome: "Sudo Abuse", info: "Exploração de configurações incorretas no arquivo sudoers em sistemas Unix." }
        ],
        defense: "Princípio do privilégio mínimo e patches de Kernel atualizados.",
        risk: "CRÍTICO"
    },
    evasion: {
        title: "> 06. EVASÃO DE DEFESA",
        desc: "Técnicas para ocultar o ataque de softwares de segurança.",
        technical: [
            { nome: "Process Hollowing", info: "Substituição do código de um processo legítimo suspenso por código malicioso." },
            { nome: "Indicator Removal", info: "Limpeza de Event Logs e histórico de comandos (.bash_history)." },
            { nome: "Rootkit Installation", info: "Ocultação de arquivos e conexões abaixo do nível do Sistema Operacional." },
            { nome: "Obfuscation", info: "Alteração constante da assinatura do malware para evitar detecção estática." }
        ],
        defense: "Uso de EDR (Behavioral Analysis) e integridade de arquivos (HIDS).",
        risk: "ALTO"
    },
    creds: {
        title: "> 07. ACESSO A CREDENCIAIS",
        desc: "Extração de identidades para expansão lateral.",
        technical: [
            { nome: "LSASS Dumping", info: "Extração de hashes de senhas diretamente da memória RAM do Windows." },
            { nome: "Brute Force / Spraying", info: "Tentativas de login automatizadas com senhas comuns em múltiplos usuários." },
            { nome: "NTDS.dit Extraction", info: "Roubo da base de dados do Active Directory contendo todos os hashes da rede." },
            { nome: "MitM Credential Sniffing", info: "Interceptação de credenciais em protocolos sem criptografia na rede local." }
        ],
        defense: "Políticas de senhas fortes e monitoramento de dumps de memória.",
        risk: "CRÍTICO"
    },
    discovery: {
        title: "> 08. DESCOBERTA",
        desc: "Mapeamento interno do terreno após a invasão.",
        technical: [
            { nome: "Network Service Scanning", info: "Varredura interna para encontrar servidores de backup e bancos de dados." },
            { nome: "Domain Trust Discovery", info: "Identificação de relações de confiança entre diferentes domínios e empresas." },
            { nome: "Cloud Resource Discovery", info: "Listagem de buckets S3 e instâncias EC2 em ambientes de nuvem." },
            { nome: "System Information", info: "Coleta de versões de patches e arquitetura para novos exploits." }
        ],
        defense: "Honeypots internos e micro-segmentação de rede.",
        risk: "MÉDIO"
    },
    lateral: {
        title: "> 09. MOVIMENTAÇÃO LATERAL",
        desc: "Expansão do controle entre máquinas da rede.",
        technical: [
            { nome: "Pass the Hash", info: "Autenticação via SMB usando hashes roubados sem necessidade da senha real." },
            { nome: "RDP Hijacking", info: "Sequestro de sessões gráficas ativas de outros usuários logados." },
            { nome: "SSH Pivoting", info: "Uso de máquinas Linux comprometidas como túneis para o tráfego de ataque." },
            { nome: "Remote Services", info: "Uso de ferramentas administrativas para executar comandos em outros sistemas." }
        ],
        defense: "Isolamento de sessões administrativas e arquitetura Zero Trust.",
        risk: "CRÍTICO"
    },
    collection: {
        title: "> 10. COLETA",
        desc: "Centralização de dados valiosos para exfiltração.",
        technical: [
            { nome: "Data Staging", info: "Agrupamento de arquivos em diretórios ocultos e compactação (ZIP/7Z)." },
            { nome: "Email Collection", info: "Exportação automatizada de históricos de e-mails buscando termos sensíveis." },
            { nome: "Clipboard Capture", info: "Monitoramento de dados copiados (senhas) na área de transferência." },
            { nome: "Screen Capture", info: "Capturas de tela periódicas para monitorar atividades de usuários VIP." }
        ],
        defense: "Ferramentas de DLP e criptografia de documentos sensíveis.",
        risk: "ALTO"
    },
    command: {
        title: "> 11. COMANDO E CONTROLE",
        desc: "Canal de comunicação bidirecional com o atacante.",
        technical: [
            { nome: "DNS Tunneling", info: "Encapsulamento de comandos em requisições DNS para burlar firewalls." },
            { nome: "HTTPS Beaconing", info: "Comunicação via porta 443 disfarçada de tráfego web legítimo." },
            { nome: "Social Media C2", info: "Uso de perfis em redes sociais para postar comandos para o malware." },
            { nome: "Fallback Channels", info: "Uso de múltiplos IPs e domínios caso o servidor principal caia." }
        ],
        defense: "Inspeção SSL/TLS e análise de reputação de domínio.",
        risk: "CRÍTICO"
    },
    exfil: {
        title: "> 12. EXFILTRAÇÃO",
        desc: "Retirada dos dados do ambiente organizacional.",
        technical: [
            { nome: "Steganography", info: "Ocultação de dados roubados dentro de arquivos de imagem (PNG/JPG)." },
            { nome: "Cloud Upload", info: "Transferência de dados para serviços como Google Drive ou Dropbox." },
            { nome: "Scheduled Exfiltration", info: "Envio de dados em horários de baixa vigilância (madrugadas)." },
            { nome: "Data Chunking", info: "Quebra de grandes volumes em pedaços pequenos para evitar picos de rede." }
        ],
        defense: "Monitoramento de volume de upload e bloqueio de nuvens pessoais.",
        risk: "CRÍTICO"
    },
    impact: {
        title: "> 13. IMPACTO",
        desc: "Ações finais para causar dano ou extorsão.",
        technical: [
            { nome: "Ransomware Encryption", info: "Criptografia de volumes de disco via algoritmos RSA+AES." },
            { nome: "Data Destruction", info: "Sobrescrita do MBR (Master Boot Record) para inutilizar o hardware." },
            { nome: "Service Stop", info: "Interrupção de processos industriais (SCADA) ou desligamento de servidores." },
            { nome: "Defacement", info: "Alteração do site oficial para causar danos à reputação." }
        ],
        defense: "Backups offline imutáveis e planos de Disaster Recovery.",
        risk: "IRREVERSÍVEL"
    },
    final: {
        title: "> 14. CONCLUSÃO",
        desc: "Encerramento da operação e monetização.",
        technical: [
            { nome: "Evidence Removal", info: "Deleção de logs, binários e scripts usados na invasão." },
            { nome: "Double Extortion", info: "Ameaça de vazamento público de dados caso o resgate não seja pago." },
            { nome: "Dark Web Sale", info: "Leilão de acessos ou segredos industriais em fóruns cibercriminosos." },
            { nome: "Anti-Forensics", info: "Uso de técnicas para impedir a atribuição real do ataque." }
        ],
        defense: "Preservação de evidências em tempo real e perícia forense pós-incidente.",
        risk: "CONCLUÍDO"
    }
};

let isTyping = false;

function startExperience() {
    document.getElementById('intro-overlay').classList.add('intro-hidden');
}

async function typeWriter(text, elementId) {
    if (isTyping) return;
    isTyping = true;
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await new Promise(r => setTimeout(r, 15));
    }
    isTyping = false;
}

async function updateDisplay(key, element) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    const phase = attackData[key];
    const detailsArea = document.getElementById('phase-details');
    detailsArea.innerHTML = '';
    typeWriter(phase.title, 'phase-title');
    document.getElementById('phase-desc').innerText = phase.desc;
    let techHtml = "<div class='details-grid'>";
    phase.technical.forEach(item => {
        techHtml += `<div class="tech-card"><h4>:: ${item.nome}</h4><p>${item.info}</p></div>`;
    });
    techHtml += "</div>";
    detailsArea.innerHTML = `${techHtml}<div class="defense-alert"><strong>🛡️ ESTRATÉGIA DEFENSIVA:</strong><br>${phase.defense}</div><div class="risk-tag">RISCO: ${phase.risk}</div>`;
}