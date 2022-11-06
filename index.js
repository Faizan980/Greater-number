    function game(){
            const num1 = document.querySelector('#num1').value;
            const num2 = document.querySelector('#num2').value;
            let num_status=false, nums_status=false;

            if(num1 === '' || isNaN(num1) || (num1 <= 0)){
                document.getElementById('num-error').innerHTML = 'Provide a valid number';
            }else{
                document.getElementById('num-error').innerHTML = '';
                num_status=true;
            }

            if(num2 === '' || isNaN(num2) || (num2 <= 0)){
                document.getElementById('num1-error').innerHTML = 'Provide a valid number';
            }else{
                document.getElementById('num1-error').innerHTML = '';
                nums_status=true;
            }

            if(num1>num2){
                document.querySelector('#result').innerHTML = `${num1} is greater than ${num2}`;
            }else if(num2>num1){
                document.querySelector('#result').innerHTML = `${num2} is greater than ${num1}`;
            }else{
                alert('The form has errors');
                result.innerHTML = '';
            }

        }