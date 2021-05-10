import React from 'react'
import Particles from 'react-particles-js';
import * as particleStyles from './particle.module.scss'

export default function ParticleBackrgound() {
    const particleOptions = {
        particles: {
        number: {
          value: 45,
          density: {
            enable: true,
            value_area: 800
          }
        }
      }
    }
    return (
            <Particles className={particleStyles.particles} params={particleOptions} />
    )
}
