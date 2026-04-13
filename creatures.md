<div class="creature-grid">

    <div class="m-card boss">
        <div class="m-card-badge">BOSS</div>
        <img src="/zombie.png" class="m-avatar" />
        <div class="m-info">
            <h3>虚空行者</h3>
            <p>简介：能在虚空中行走，会向玩家发射末影珍珠。</p>
            <div class="m-stats">
                <span>❤️ 150</span>
                <span>⚔️ 12</span>
                <span>🏃 1.5x</span>
            </div>
        </div>
    </div>

    <div class="m-card elite">
        <div class="m-card-badge">精英</div>
        <img src="/spider.png" class="m-avatar" />
        <div class="m-info">
            <h3>剧毒织网者</h3>
            <p>简介：攻击附带强力中毒，死亡后生成大量蛛丝。</p>
            <div class="m-stats">
                <span>❤️ 60</span>
                <span>⚔️ 8</span>
                <span>🕸️ 束缚</span>
            </div>
        </div>
    </div>

</div>

<style>
    /* 这里写你的专属装修代码 */
    .creature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .m-card {
        background: var(--vp-c-bg-soft);
        border: 1px solid var(--vp-c-divider);
        border-radius: 12px;
        padding: 20px;
        position: relative;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .m-card:hover {
        border-color: var(--vp-c-brand);
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .m-card-badge {
        position: absolute;
        top: 10px;
        right: -20px;
        background: var(--vp-c-brand);
        color: white;
        padding: 2px 25px;
        font-size: 10px;
        transform: rotate(45deg);
        font-weight: bold;
    }

    .m-card.boss {
        border-top: 4px solid #a335ee;
    }

    .m-card.elite {
        border-top: 4px solid #ff8000;
    }

    .m-avatar {
        width: 64px;
        height: 64px;
        margin: 0 auto 15px;
        display: block;
        image-rendering: pixelated;
        /* 让MC像素不模糊 */
    }

    .m-info h3 {
        margin: 0 0 10px 0 !important;
        text-align: center;
        color: var(--vp-c-text-1);
    }

    .m-info p {
        font-size: 13px;
        color: var(--vp-c-text-2);
        line-height: 1.5;
        margin-bottom: 15px;
    }

    .m-stats {
        display: flex;
        justify-content: space-around;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 5px;
        font-size: 12px;
    }
</style>