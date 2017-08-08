jQuery(document).ready(function($) {

      // Validate detail page review form
      $("#review-form, #detail-review-form").validate({
          rules: {
              titleReview: {
                  required: true,
              },
              commentReview: {
                  required: true,
                  minlength: 10
              },
          },
          messages: {
              titleReview: "This is required field",
              commentReview: {
                  required: "This is required field",
                  minlength: "Your message must be at least 10 characters long"
              },
          }
      });

      // Validate checkout login form
      $("#contact-form").validate({
          rules: {
              name: {
                  required: true,
                  validateFIO: true
              },
              email: {
                  required: true,
                  validateEmailORPhone: true
              },
              message: {
                  required: true,
                  minlength: 10
              }
          },
          messages: {
              name: {
                  required: "This is required field",
                  validateFIO: "Enter a valid Firstname Name and Middle name",
              },
              email: {
                  required: "This is required field",
                  validateEmailORPhone: "Введите email в формате primer@primer.ru или действительный номер телефона"
              },
              message: {
                  required: "This is required field",
                  minlength: "Your message must be at least 10 characters long"
              }
          }
      });

  		// Validate checkout login form
  		$("#checkout-login").validate({
    			rules: {
      				password: {
        					required: true,
        					minlength: 6
      				},
      				login: {
        					required: true,
        					validateEmail: true
      				}
    			},
    			messages: {
      				password: {
        					required: "Введите ваш пароль",
        					minlength: "Your password must be at least 6 characters long"
      				},
      				login: {
                  required: "This is required field",
                  validateEmail: "Введите email в формате primer@primer.ru"
              }
    			}
  		});

      // Validate checkout register form
      $("#checkout-register").validate({
          rules: {
              fio: {
                  required: true,
                  validateFIO: true
              },
              phone: {
                  required: true,
                  validatePhone: true
              },
              city: {
                  required: true,
              },
              postalCode: {
                  required: true,
                  russianPostalCode: true
              },
              address: {
                  required: true
              },
              paymentMethod: {
                  required: true
              }
          },
          messages: {
              fio: {
                required: "This is required field",
                validateFIO: "Enter a valid Firstname Name and Middle name"
              },
              phone: {
                  required: "This is required field",
                  validatePhone: "Enter a valid phone number"
              },
              city: "This is required field",
              postalCode: {
                  required: "This is required field",
                  russianPostalCode: "Add a valid postal code"
              },
              address: "This is required field",
              paymentMethod: "Select the payment method"
          }
      });

      $.validator.addMethod("validateFIO", function(value, element) {
          return this.optional(element) || /[a-zA-Z]+\s+[a-zA-Z]+\s+[a-zA-Z]+/g.test(value);
      });

      $.validator.addMethod("validatePhone", function(value, element) {
          return this.optional(element) || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
      });

      $.validator.addMethod("russianPostalCode", function(value, element) {
          return this.optional(element) || /[1-6]\d{5}/.test(value);
      });

      $.validator.addMethod("validateEmail", function(value, element) {
          return this.optional(element) || /([a-zA-Z0-9_.]{1,})((@[a-zA-Z]{2,})[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))/.test(value);
      });

      $.validator.addMethod("validateEmailORPhone", function(value, element) {
          return this.optional(element) || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value) || /([a-zA-Z0-9_.]{1,})((@[a-zA-Z]{2,})[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))/.test(value);
      });

      // $.validator.addMethod("validateReviewRating", function(value, element) {
      //     return /[1-5]{1}$/.test(value);
      // },);


});
