
import * as THREE from 'three'

// Custom Ellipse Geometry for flower petals
class EllipseGeometry extends THREE.BufferGeometry {
  constructor(radiusX = 1, radiusY = 1, segments = 8) {
    super()

    const vertices = []
    const normals = []
    const uvs = []
    const indices = []

    // Center vertex
    vertices.push(0, 0, 0)
    normals.push(0, 0, 1)
    uvs.push(0.5, 0.5)

    // Outer vertices
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const x = Math.cos(angle) * radiusX
      const y = Math.sin(angle) * radiusY

      vertices.push(x, y, 0)
      normals.push(0, 0, 1)
      uvs.push((x / radiusX + 1) / 2, (y / radiusY + 1) / 2)
    }

    // Create triangles
    for (let i = 0; i < segments; i++) {
      indices.push(0, i + 1, i + 2)
    }

    this.setIndex(indices)
    this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
    this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  }
}

// Extend Three.js to include ellipseGeometry
THREE.EllipseGeometry = EllipseGeometry

export default EllipseGeometry
