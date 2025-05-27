# groom-style_deploy

Deploy repository voor de Groom Style website met Docker en Traefik.

---

## Inhoud

- `docker-compose.yml`: De configuratie voor Docker containers en Traefik reverse proxy.  
- `public/`: Map met de website bestanden (HTML, CSS, afbeeldingen, JS).  
- `.gitignore`: Bestanden en mappen die niet in Git worden opgenomen.

---

## Project overzicht

Deze repository bevat de Docker configuratie om de Groom Style website te hosten met behulp van Nginx als webserver en Traefik als reverse proxy en certificaatbeheerder (Let's Encrypt).

---

## Vereisten

- Docker & Docker Compose geïnstalleerd op je server/VM  
- DNS records die verwijzen naar je server (bijv. groom-style.ignorelist.com en traefik-groom-style.ignorelist.com)  
- Internettoegang voor automatische TLS certificaatvernieuwing

---

## Gebruik

1. **Clone de repo**
   ```bash
   git clone https://github.com/T3OP/groom-style_deploy.git
   cd groom-style_deploy
   
2. **Pas eventueel docker-compose.yml aan voor jouw omgeving (domeinnamen, e-mailadres voor Let's Encrypt, etc.).**

3. **Start de docker containers**
   ```bash
   docker-compose up -d
   
4. **(Optioneel) Schaal de webservice voor load balancing**
   ```bash
   docker-compose up -d --scale web=3
   
5. **Controleer de draaiende containers**
   ```bash
   docker ps
   
6. **Stop de containers**
   ```bash
   docker-compose down

## Toegang

Website: https://groom-style.ignorelist.com
Traefik dashboard: https://traefik-groom-style.ignorelist.com (zorg dat DNS hiervoor juist is ingesteld)

## Status

Deze deployment was oorspronkelijk opgezet voor een VM op Microsoft Azure.
De Azure VM is inmiddels verwijderd, maar de configuratie en code in deze repository blijven beschikbaar voor toekomstige deployments of aanpassingen.

## Contact

Voor vragen of feedback kun je mailen naar: teomanp03@gmail.com
