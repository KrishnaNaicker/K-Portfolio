window.addEventListener('load', () => {
    if (typeof VANTA !== 'undefined') {
        try {
            const vantaEffect = VANTA.FOG({
                el: "#vanta-background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                highlightColor: 0x3b4a6b,
                midtoneColor: 0x1e2738,
                lowlightColor: 0x0f1419,
                baseColor: 0x0a0e27,
                blurFactor: 0.60,
                speed: 2.0,
                zoom: 1.10
            });
            
            setTimeout(() => {
                const canvas = document.querySelector('#vanta-background canvas');
                if (canvas) {
                    canvas.style.zIndex = '-1';
                    canvas.style.position = 'fixed';
                }
            }, 100);
            
            console.log('✅ Fog loaded');
        } catch (e) {
            console.error('Vanta error:', e);
        }
    }
});