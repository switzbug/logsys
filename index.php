<?php
include_once 'header.php';
 ?>

    <section class = "main-container">
      <div class="main-wrapper">
        <h2>Home</h2>
        <?php
        if(isset($_SESSION['u_id'])){
          echo "you are logged in!";
          echo '<br><br><a href = " snake-master/index.html">You are ready to play</a>';

        }

         ?>

      </div>
    </section>
<?php
    include_once 'footer.php';
 ?>
