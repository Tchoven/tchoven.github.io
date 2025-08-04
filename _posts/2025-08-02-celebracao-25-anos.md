---
layout: default
title: "Uma Noite para a História: Celebramos Nossos 25 Anos!"
date: 2025-08-03 # <-- DATA ALTERADA AQUI
description: "Reviva os melhores momentos da nossa inesquecível festa de 25 anos, uma noite de emoção, dança e comunidade."
image: /assets/img/grupo-tchoven.png
---
<section class="py-16 md:py-24 bg-gradient-to-b from-[#081525] to-[#0d1a2b] text-white">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
            <!-- Título da Notícia -->
            <div class="text-center mb-10">
                <p class="text-sm text-[#FFD500] font-semibold">{{ page.date | date: "%d de %B de %Y" }}</p>
                <h1 class="text-3xl md:text-4xl font-bold mt-2">{{ page.title }}</h1>
            </div>

            <!-- Imagem de Destaque -->
            <div class="mb-10 rounded-lg overflow-hidden custom-shadow">
                <img src="{{ page.image | relative_url }}" alt="{{ page.title }}" class="w-full h-auto object-cover">
            </div>

            <!-- Conteúdo da Notícia -->
            <div class="prose prose-invert lg:prose-xl max-w-none text-lg text-gray-300 text-justify space-y-6">
                <p class="lead">No último dia 02 de agosto, vivemos uma noite repleta de emoção, alegria e, acima de tudo, união. A celebração dos <strong>25 anos do Grupo Folclórico Ucraniano Tchóven</strong> foi um verdadeiro sucesso, e ficará marcada para sempre em nossos corações.</p>
                
                <p>A noite começou com uma solene Divina Liturgia, um momento de profunda gratidão por toda a nossa trajetória. Em seguida, o salão da nossa comunidade se encheu de energia com uma apresentação especial dos nossos dançarinos, que contaram um pouco da nossa história através da dança.</p>

                <p>O jantar festivo foi o momento perfeito para a confraternização, e a festa continuou noite adentro ao som do talentoso Celso Taborda, que não deixou ninguém parado.</p>
                
                <p>Gostaríamos de registrar nosso mais sincero <strong>agradecimento</strong> a cada pessoa que esteve presente: dançarinos, pais, fundadores, amigos, patrocinadores e toda a comunidade. Vocês são a força que nos move e a razão pela qual o "barco" do Tchóven continua navegando. Que venham mais 25 anos!</p>
            </div>

            <!-- Voltar para Notícias -->
            <div class="text-center mt-16">
                <a href="{{ '/noticias/' | relative_url }}" class="inline-flex items-center gap-2 px-6 py-2 border-2 border-[#FFD500] text-[#FFD500] rounded-full font-medium hover:bg-[#FFD500]/10 transition">
                    <i class="fas fa-arrow-left"></i>
                    Ver Todas as Notícias
                </a>
            </div>
        </div>
    </div>
</section>