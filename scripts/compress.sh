#!/bin/bash
for i in *.png; do
  pngquant --force --quality=40-100 --strip --skip-if-larger \
--verbose $i
done