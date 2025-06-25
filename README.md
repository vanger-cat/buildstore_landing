# BuildStore Landing

Статичная посадочная страница для BuildStore (builds.io).

## Структура проекта

- `index.html` — главная страница
- `styles.css` — стили
- `assets/` — изображения и логотипы
- `README.md` — описание проекта

## Полезные команды

### Конвертация всех PNG в WebP

```sh
find assets -type f -name '*.png' -exec sh -c 'cwebp -q 90 "$1" -o "${1%.png}.webp"' _ {} \;
```

**Инструкция:**
1. Убедитесь, что установлен пакет `cwebp` (например, через Homebrew: `brew install webp`).
2. Выполните команду из корня проекта. Все PNG-файлы в папке `assets` и её подпапках будут сконвертированы в WebP с качеством 90.
3. Новые файлы появятся рядом с исходными, с тем же именем и расширением `.webp`.

### Ресайз webp-картинок с высотой больше 520px

```sh
find assets -type f -name '*.webp' -exec sh -c 'height=$(identify -format "%h" "$1"); if [ "$height" -gt 520 ]; then cwebp -resize 0 520 "$1" -o "$1"; fi' _ {} \;
```

**Инструкция:**
1. Установите ImageMagick (`brew install imagemagick`) и cwebp (`brew install webp`), если они ещё не установлены.
2. Выполните команду из корня проекта.
3. Все webp-файлы в папке `assets` и её подпапках, у которых высота больше 520px, будут уменьшены до 520px по высоте с сохранением пропорций ширины.