# 🚀 Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu portfolio en Vercel de forma gratuita.

## Pasos para el Despliegue

### 1. Preparación del Repositorio

Primero, asegúrate de que tu código esté en un repositorio de GitHub:

```bash
# Inicializar git (si no está hecho)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Portfolio inicial de Demian Caivano"

# Conectar con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/demian-portfolio.git

# Subir a GitHub
git push -u origin main
```

### 2. Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up"
3. Conecta con tu cuenta de GitHub

### 3. Importar Proyecto

1. En el dashboard de Vercel, haz clic en "New Project"
2. Selecciona tu repositorio `demian-portfolio`
3. Vercel detectará automáticamente que es un proyecto Next.js
4. **Configuración recomendada:**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (raíz del proyecto)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### 4. Variables de Entorno (si necesarias)

Si en el futuro agregas funcionalidades que requieren API keys:

1. Ve a tu proyecto en Vercel
2. Ve a "Settings" → "Environment Variables"
3. Agrega las variables necesarias

### 5. Dominio Personalizado (Opcional)

#### Dominio gratuito de Vercel
Tu sitio estará disponible en: `https://demian-portfolio-[hash].vercel.app`

#### Dominio personalizado
1. Compra un dominio (recomendados: Namecheap, Google Domains)
2. En Vercel: Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## ✅ Verificación del Despliegue

Después del despliegue, verifica:

- [ ] El sitio carga correctamente
- [ ] Todas las secciones son visibles
- [ ] La navegación funciona
- [ ] El formulario de contacto responde
- [ ] El diseño responsive funciona en móviles
- [ ] El modo oscuro/claro funciona
- [ ] Las animaciones se ven correctamente

## 🔄 Actualizaciones Automáticas

Una vez configurado, cada vez que hagas push a la rama `main`:

1. Vercel detectará los cambios automáticamente
2. Iniciará un nuevo build
3. Desplegará la nueva versión
4. Te enviará una notificación del estatus

## 📊 Métricas y Analytics

Vercel proporciona automáticamente:

- **Web Vitals**: Core Web Vitals y métricas de rendimiento
- **Analytics**: Estadísticas de visitas (plan gratuito limitado)
- **Function Logs**: Logs de las funciones serverless

## 🔧 Troubleshooting

### Error de Build
Si falla el build:
1. Verifica que `npm run build` funciona localmente
2. Revisa los logs en Vercel
3. Asegúrate de que todas las dependencias estén en `package.json`

### Problemas de Importación
Si hay errores de módulos no encontrados:
1. Verifica las rutas de importación
2. Asegúrate de usar `@/` para imports absolutos
3. Verifica que los archivos existan

### Performance Issues
1. Optimiza imágenes usando `next/image`
2. Implementa lazy loading
3. Minimiza el JavaScript bundle

## 📞 Soporte

- **Documentación Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Documentación Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Para reportar problemas del portfolio

---

¡Tu portfolio estará live en minutos! 🎉
