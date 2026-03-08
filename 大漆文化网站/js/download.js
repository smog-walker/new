// 下载页面特定功能
document.addEventListener('DOMContentLoaded', function() {
    // 自动检测用户操作系统并推荐下载
    detectOSAndHighlight();
    
    // 下载进度模拟
    setupDownloadProgress();
});

function detectOSAndHighlight() {
    const userOS = getOperatingSystem();
    const downloadCards = document.querySelectorAll('.download-card');
    
    downloadCards.forEach(card => {
        const osText = card.querySelector('h3').textContent.toLowerCase();
        
        if (osText.includes(userOS)) {
            card.style.border = '3px solid #3498db';
            card.style.transform = 'scale(1.05)';
            
            // 添加推荐标签
            const recommendation = document.createElement('div');
            recommendation.innerHTML = '<span style="background: #3498db; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem;">推荐</span>';
            card.querySelector('.os-icon').after(recommendation);
        }
    });
}

function getOperatingSystem() {
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf('Win') !== -1) return 'windows';
    if (userAgent.indexOf('Mac') !== -1) return 'macos';
    if (userAgent.indexOf('Linux') !== -1) return 'linux';
    
    return 'unknown';
}

function setupDownloadProgress() {
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 模拟下载进度显示
            const originalText = this.innerHTML;
            this.innerHTML = '准备下载...';
            this.style.background = '#95a5a6';
            
            setTimeout(() => {
                this.innerHTML = '下载中...';
                this.style.background = '#f39c12';
            }, 500);
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '#e74c3c';
                
                // 显示下载完成提示
                showDownloadComplete();
            }, 2000);
        });
    });
}

function showDownloadComplete() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = '✅ 下载已开始，请检查您的下载文件夹';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 添加到主样式文件中
const downloadCSS = `
.download-hero {
    background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
    color: white;
    padding: 120px 0 60px;
    text-align: center;
}

.download-hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.download-section {
    padding: 80px 0;
    background: #f8f9fa;
}

.download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.download-card {
    background: white;
    padding: 40px 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.download-card:hover {
    transform: translateY(-5px);
}

.os-icon {
    font-size: 4rem;
    margin-bottom: 20px;
}

.download-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2c3e50;
}

.version {
    color: #3498db;
    font-weight: bold;
    font-size: 1.1rem;
}

.file-size {
    color: #666;
    margin-bottom: 20px;
}

.requirements {
    list-style: none;
    margin-bottom: 30px;
}

.requirements li {
    padding: 5px 0;
    color: #666;
}

.btn-download {
    background: #e74c3c;
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    transition: all 0.3s;
}

.btn-download:hover {
    background: #c0392b;
    transform: translateY(-2px);
}

.installation-guide {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.installation-guide h2 {
    text-align: center;
    margin-bottom: 40px;
    color: #2c3e50;
}

.guide-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.step {
    text-align: center;
    padding: 20px;
}

.step-number {
    background: #3498db;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto 20px;
}

.step h3 {
    margin-bottom: 10px;
    color: #2c3e50;
}

.step p {
    color: #666;
    line-height: 1.6;
}
`;

// 将下载页面样式添加到主样式文件
const styleSheet = document.createElement('style');
styleSheet.textContent = downloadCSS;
document.head.appendChild(styleSheet);