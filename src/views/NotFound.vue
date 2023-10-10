<template>
  <section class="error_404">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div
          class="content-wrapper d-flex align-items-center text-center error-page bg-primary"
        >
          <div class="row flex-grow">
            <div class="col-lg-7 mx-auto text-white">
              <div class="row align-items-center d-flex flex-row">
                <div class="col-lg-6 text-lg-right pr-lg-4">
                  <h1 class="display-1 mb-0">404</h1>
                </div>
                <div class="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                  <h2>SORRY!</h2>
                  <h3 class="font-weight-light">
                    The page you’re looking for was not found.
                  </h3>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 text-center mt-xl-2">
                  <router-link class="text-white font-weight-medium" to="/"
                    >Back to home</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
/* CSS for .error_404 class */
.error_404 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #007bff;
}

/* CSS for .container-scroller class */
.container-scroller {
  width: 100%;
}

/* CSS for .container-fluid class */
.container-fluid {
  padding: 0;
}

/* CSS for .page-body-wrapper class */
.page-body-wrapper {
  height: 100%;
}

/* CSS for .content-wrapper class */
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #007bff; /* Use your desired background color */
  height: 100%;
}

/* CSS for .error-page class */
.error-page {
  flex-grow: 1;
}

/* CSS for .error-page-divider class */
.error-page-divider {
  text-align: left;
  padding-left: 2rem; /* Adjust as needed */
}

/* CSS for .display-1 class */
.display-1 {
  font-size: 6rem; /* Adjust as needed */
  margin-bottom: 0;
}

/* CSS for h2 and h3 elements */
h2,
h3 {
  color: white;
}

/* CSS for .mt-5, .mt-xl-2, .text-center, .font-weight-medium, and .font-weight-light classes */
.mt-5,
.mt-xl-2,
.text-center,
.font-weight-medium,
.font-weight-light {
  margin-top: 1.25rem; /* Adjust as needed */
}

/* CSS for .col-lg-6, .col-12, .col-lg-7, and .mx-auto classes */
.col-lg-6,
.col-12,
.col-lg-7,
.mx-auto {
  /* Add your custom styling as needed */
}

/* CSS for <router-link> element */
router-link {
  color: white;
  font-weight: 500;
  text-decoration: none;
}

/* CSS for <router-link> hover state */
router-link:hover {
  text-decoration: underline;
}

/* CSS for .text-white class */
.text-white {
  color: white;
}
</style>
