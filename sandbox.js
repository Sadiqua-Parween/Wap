const btn = document.getElementById("calculate")
        btn.addEventListener("click" , calculate)
        
        function calculate(){
            const bill = document.getElementById("bill")
            let billValue = Number(bill.value)
            const tip = document.getElementById("tip")
            let tipValue = Number(tip.value);
            const total = document.getElementById("total")
            total.textContent = billValue + (billValue * (tipValue/100))
        }