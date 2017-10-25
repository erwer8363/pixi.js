import * as core from '../../core';
import vertex from '../fragments/default.vert';
import fragment from './noise.frag';

/**
 * @author Vico @vicocotea
 * original filter: https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js
 */

/**
 * A Noise effect filter.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export default class NoiseFilter extends core.Filter
{
    /**
     * @param {number} noise - The noise intensity, should be a normalized value in the range [0, 1].
     * @param {number} seed - A random seed for the noise generation. Default is `Math.random()`.
     */
    constructor(noise = 0.5, seed = Math.random())
    {
        super(vertex, fragment);

        this.noise = noise;
        this.seed = seed;
    }

    /**
     * The amount of noise to apply, this value should be in the range (0, 1].
     *
     * @member {number}
     * @default 0.5
     */
    get noise()
    {
        return this.uniforms.uNoise;
    }

    set noise(value) // eslint-disable-line require-jsdoc
    {
        this.uniforms.uNoise = value;
    }

    /**
     * A seed value to apply to the random noise generation. `Math.random()` is a good value to use.
     *
     * @member {number}
     */
    get seed()
    {
        return this.uniforms.uSeed;
    }

    set seed(value) // eslint-disable-line require-jsdoc
    {
        this.uniforms.uSeed = value;
    }
}
