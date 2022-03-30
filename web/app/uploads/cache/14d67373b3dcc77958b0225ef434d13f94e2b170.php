<section class="sec2">

<h1><?php echo e($title); ?></h1>

<div class="artists__victory flex">

<?php while( $albums->have_posts()): ?> <?php $albums->the_post() ?>

    <div class="artists">
              <div class="artists__music">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/image2-2.jpg">
                <div class="artists__text">
                    <p><b>STROMAE</b> Multitude</p>
                    <p class="artists__date">2021</p>
                    <p>Hip hop, Electronic</p>
                </div>
              </div>
            </div>

<?php endwhile; ?>

</div>

<button class="artisits__disc"><b><?php echo e($btn); ?></b></button>

</section>