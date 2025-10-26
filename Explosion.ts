﻿import Base = require("./TexturedObject");

class Explosion extends Base {

    private m_animationComplete: boolean = false;

    constructor(texture: HTMLImageElement, x: number, y: number) {
        super(texture);
        this.m_x = x;
        this.m_y = y;
        this.m_width = texture.width / 16;
        this.m_height = texture.height;
        this.m_frame = 0;
    }

    public Update(): void {



        if (this.m_frame < 16) {


            if (this.m_frame < 16 && (this.m_animDelay += 0.1) > 0.3) {


                this.m_animDelay = 0;

                this.m_frame += 1;

            }
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.m_texture, this.m_frame * this.m_width, 0, this.m_width, this.m_height, this.m_x, this.m_y, this.m_width, this.m_height);
    }

    public get AnimationComplete() {
        return this.m_animationComplete;
    }
}

export = Explosion;   