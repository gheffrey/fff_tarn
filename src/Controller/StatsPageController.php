<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StatsPageController extends AbstractController
{
    #[Route('/stats/page', name: 'app_stats_page')]
    public function index(): Response
    {
        return $this->render('stats_page/index.html.twig', [
            'controller_name' => 'StatsPageController',
        ]);
    }
}
